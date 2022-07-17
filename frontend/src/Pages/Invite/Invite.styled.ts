import styled from 'styled-components';

const InviteBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  .flex {
    width: 50%;
    @media (max-width: 768px) {
      width: 80vw;
    }
    min-height: 350px;
    max-width: 500px;
    height: 40%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #fafafa55;
    border-radius: 30px;
    box-shadow: 2px 4px 5px -1px rgb(0, 0, 0, 0.2);
    padding: 15px;
    h3 {
      text-align: center;
      margin: 0;
      padding: 0;

      u {
        text-underline-offset: 3px;
        text-decoration-color: #f995f0;
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      #accept {
        font-size: 1.2rem;
        font-weight: 900;
        width: 27vw;
        @media (max-width: 768px) {
          width: 50vw;
        }
        height: 6vh;
        background: #f995f0;
        border: 1px solid #f995f0;
        border-radius: 10px;
        color: #ffffff;

        &:hover {
          background: #f995f0bb;
        }
      }

      #notAccept {
      }
    }
    #notice {
      color: gray;
      text-align: center;
    }
    backdrop-filter: blur(15px);
  }
`;

const Styled = {
  InviteBox,
};

export default Styled;
