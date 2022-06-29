import React, { useState, useMemo, useCallback, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Alert from '@mui/material/Alert';

// import { CopyToClipboard } from 'react-copy-to-clipboard';

import AddModal from 'src/Components/Modal';
import { UserService } from 'src/Network/UserService';
import { User } from 'src/Interface/UserType';
import { UserContext } from 'src/App';

/**
 * action
 * if setup:
 * - edit date :
 * - edit user & delete user :
 * - find user :
 * - share : Share
 * else:
 * - add user
 */

const actionAftereUserSettup = [
  { icon: <FileCopyIcon />, name: '날짜 선택' },
  // { icon: <SaveIcon />, name: '프로필 수정' },
  // { icon: <PrintIcon />, name: '유저 검색' },
  { icon: <ShareIcon />, name: '공유하기' },
];

const actionBeforeUserSettup = [{ icon: <ShareIcon />, name: '프로필 만들기' }];

const EditButton: React.FC<{
  isUserCreated: boolean;
  updateCalendar: (name: string) => void;
}> = ({ isUserCreated, updateCalendar }) => {
  const { state, dispatch } = useContext(UserContext);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const database_id = location.pathname.includes('calendar')
    ? location.search.substring(4)
    : location.pathname;
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalOpen = () => setIsShowModal(true);
  const handleModalClose = () => setIsShowModal(false);

  const handleCopyTrue = () => setIsCopy(true);
  const handleCopyFalse = () => setIsCopy(false);

  const addUser = async (user: User) => {
    if (!dispatch) throw new Error('no dispatch');
    for (const _user of state.users) {
      if (_user.name === user.name) {
        alert('User name is aready exist');
        return;
      }
    }
    await UserService.createUser('/' + database_id, {
      name: user.name,
      color: user.color,
    });
    updateCalendar(user.name);
  };

  const actions = useMemo(() => {
    if (isUserCreated) {
      return actionAftereUserSettup;
    } else {
      return actionBeforeUserSettup;
    }
  }, [isUserCreated]);

  const editSchedule = () => {
    console.log('editSchedule');
  };

  // const editProfile = () => {
  //   console.log('editProfile');
  // };

  // const findUser = () => {
  //   console.log('findUser');
  // };

  const share = () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
    handleCopyTrue();
  };

  const addUserModalOpen = () => {
    handleModalOpen();
  };

  const handleActions = (name: string) => {
    switch (name) {
      case '날짜 선택':
        editSchedule();
        break;
      // case '프로필 수정':
      //   editProfile();
      //   break;
      // case '유저 검색':
      //   findUser();
      //   break;
      case '공유하기':
        share();
        break;
      case '프로필 만들기':
        addUserModalOpen();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Backdrop
        open={open}
        sx={{ bgcolor: theme.myPalette.backDrop, zIndex: 200 }}
      />
      <AddModal
        isShowModal={isShowModal}
        handleModalClose={handleModalClose}
        addUser={addUser}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isCopy}
        autoHideDuration={2000}
        onClose={handleCopyFalse}
        message="복사되었습니다."
      />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onClick={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActions(action.name)}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default EditButton;
