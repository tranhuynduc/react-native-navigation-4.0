import styled from 'styled-components';
import { View } from 'react-native';

const Spacing = styled(View)`
  margin-vertical: 5px;

  ${({ gap }) =>
    gap &&
    `
    marginVertical: ${gap}px
 `};
`;

export default Spacing;
