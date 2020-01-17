import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  background: #333;
  flex: 1;

  ${({ gap }) =>
    gap &&
    `
    paddingVertical: ${gap}px
 `}
`;

export default Container;
