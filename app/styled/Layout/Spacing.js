import styled from 'styled-components';

const Spacing = styled.View`
  margin-vertical: 5px;

  ${({ gap }) =>
    gap &&
    `
    marginVertical: ${gap}px
 `};
`;

export default Spacing;
