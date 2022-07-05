import React, { useState, useCallback, useContext, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Styled from './HeaderModal.styled';
import Snackbar from '@mui/material/Snackbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { UserContext } from 'src/App';
import { useSign } from 'src/Utils/firebaseAuth';

const githubLink = 'https://github.com/rkskekzzz/blockcalendar.git';
const emailLink = 'mailto:wkdlfflxh@naver.com';
const articleLink = 'https://80000coding.oopy.io';

const HeaderModal: React.FC<{
  isShowModal: boolean;
  handleModalClose: () => void;
}> = ({ isShowModal, handleModalClose }) => {
  const theme = useTheme();
  const { dispatch } = useContext(UserContext);
  const [open, setOpen] = useState<boolean>(false);
  const { handleSignOut } = useSign();
  const navi = useNavigate();

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = useCallback((link: string) => {
    window.open(link);
  }, []);

  const handleThemeChangeButton = () => {
    dispatch({
      type: 'CHANGEMODE',
      mode: theme.myPalette.mode === 'light' ? 'dark' : 'light',
    });
  };

  const handleCloseButton = useCallback(() => {
    handleModalClose();
  }, [handleModalClose]);

  const style = {
    color: theme.myPalette.iconSmall,
    transition: 'color 500ms ease-in-out 0ms',
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Copy To Clipboard!
        </Alert>
      </Snackbar>
      <Styled.ColoredModal
        open={isShowModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        color={theme.myPalette.backDropHeader}
      >
        <Styled.ModalBox>
          <CloseIcon onClick={handleCloseButton} fontSize="medium" sx={style} />
          <CopyToClipboard text={window.location.href}>
            <Styled.ModalTextButton
              color={theme.myPalette.iconSmall}
              onClick={handleOpen}
            >
              공유하기
            </Styled.ModalTextButton>
          </CopyToClipboard>
          <Styled.ModalTextButton
            color={theme.myPalette.iconSmall}
            onClick={handleThemeChangeButton}
          >
            {theme.myPalette.mode === 'light' ? '어두운 테마' : '밝은 테마'}
          </Styled.ModalTextButton>
          <Styled.ModalTextButton
            onClick={() => navi('/anony')}
            color={theme.myPalette.iconSmall}
          >
            익명으로 사용하기
          </Styled.ModalTextButton>
          <Styled.ModalTextButton
            onClick={handleSignOut}
            color={theme.myPalette.iconSmall}
          >
            로그아웃
          </Styled.ModalTextButton>
          <Styled.ModalBoxButtons>
            <GitHubIcon onClick={() => handleClick(githubLink)} sx={style} />
            <EmailIcon onClick={() => handleClick(emailLink)} sx={style} />
            <ArticleIcon onClick={() => handleClick(articleLink)} sx={style} />
          </Styled.ModalBoxButtons>
        </Styled.ModalBox>
      </Styled.ColoredModal>
    </>
  );
};

export default HeaderModal;
