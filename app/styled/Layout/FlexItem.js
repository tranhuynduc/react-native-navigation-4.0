import styled from 'styled-components';
import { View } from 'react-native';

const FlexItem = styled(View)`
  flex: 1;

  ${({ flex }) =>
    flex &&
    `
    flex: ${flex}
 `}

  ${({ background }) =>
    background &&
    `
    background-color: ${background}
 `}
`;

export default FlexItem;
