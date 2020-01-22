import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;

  ${({ gap }) =>
    gap &&
    `
    paddingVertical: ${gap}px
 `}
`;

export default Container;
