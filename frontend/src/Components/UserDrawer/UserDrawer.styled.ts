import styled from 'styled-components';
import NumberEx from 'src/Common/NumberEx';
import { Box } from '@mui/material';

const UserList = styled.div`
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .list-header {
      display: flex;
      justify-content: space-between;
      b,
      p {
        padding: 0;
        margin: 0;
      }
      b {
        font-weight: 300;
      }
    }
    #list-box {
      height: 100%;

      display: grid;
      grid-template-columns: 2fr 3fr;
      justify-content: center;
      .time-label {
        display: flex;
        flex: 1 1 0;

        .time-label-number {
          width: 17px;
          font-size: 7px;
          text-align: center;
          letter-spacing: -1px;
          transform: translate(8px, 10px);
        }
        .first::after {
          content: '0';
          position: absolute;
          width: 17px;
          left: 0;
          font-size: 7px;
          text-align: center;
          letter-spacing: -1px;
          transform: translate(-100%, 0);
        }
      }
      .with-circle {
        display: flex;
        align-items: center;
        gap: 5px;

        span {
          // if text is too long, it will be ... (ellipsis)
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`;

const UserBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .userinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex: 2 2 0;
  }
`;

const Puller = styled(Box)`
  && {
    width: 60px;
    height: 6px;
    background-color: grey;
    border-radius: 3px;
    position: absolute;
    top: 8px;
    left: calc(50% - 30px);
  }
`;

const UserDrawer = styled.div<{
  isShow: boolean;
  bgcolor: string;
  bgdropcolor: string;
  fgcolor: string;
}>`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${NumberEx.calendarMaxWidth};
  max-height: 80vh;
  overflow: scroll;
  padding: 30px;
  border-radius: 20px 20px 0px 0px;
  background-color: ${(props) => props.bgcolor || '#00000080'};
  transition: all 0.5s ease-in-out 0s;
  * {
    color: ${(props) => props.fgcolor || '#ffffff'};
  }
  ${(props) => {
    if (props.isShow) {
      return `
        transform: translate(0, 0);
      `;
    } else {
      return `
        transform: translate(0, 100%);
      `;
    }
  }}
`;

const Styled = {
  UserDrawer,
  UserBox,
  UserList,
  Puller,
};

export default Styled;
