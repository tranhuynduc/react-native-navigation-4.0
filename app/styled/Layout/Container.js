import styled from 'styled-components';
import { View } from 'react-native';

const Container = styled(View)`
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
