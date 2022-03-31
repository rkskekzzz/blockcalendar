import styled from 'styled-components';

const AutoSizerWrapper = styled.div`
  flex: 1 1 0;
  height: 100vh;
  .list::-webkit-scrollbar {
    display: none;
  }
`;
const Styled = { AutoSizerWrapper };

export default Styled;
