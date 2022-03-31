import * as React from 'react';
import { useReducer, createContext, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import './App.css';
import { reducer } from './Utils';
import { themes } from './theme';
import { useMediaQuery } from '@mui/material';
import { State, userDispatch } from './Interface/ContextType';
import { initialState } from './Interface/initialState';
import { SignedCalendar, Error, AnonyCalendar, Entrance } from './Pages';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const UserContext = createContext<{
  state: State;
  dispatch: userDispatch;
}>({
  state: initialState,
  dispatch: () => {
    null;
  },
});

const ProtectedRoute = () => {
  const { state } = React.useContext(UserContext);
  if (!state.users) {
    return <Navigate to={'/'} replace />;
  }
  return <Outlet />;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: state.mode,
        },
        myPalette: state.mode == 'dark' ? themes.dark : themes.light,
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    document.body.style.background = theme.myPalette.background;
  }, [theme]);

  useEffect(() => {
    dispatch({ type: 'CHANGEMODE', mode: prefersDarkMode ? 'light' : 'dark' });
  }, [prefersDarkMode]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/:id" element={<AnonyCalendar />} />
            <Route path="/" element={<Entrance />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/calendar" element={<SignedCalendar />} />
            </Route>
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}
export default App;
