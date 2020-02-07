import styled from 'styled-components';
import { View } from 'react-native';

const FlexItem = styled(View)`
  flex: 1;

  ${({ background }) =>
    background &&
    `
    background-color: ${background}
 `}
`;

export default FlexItem;
