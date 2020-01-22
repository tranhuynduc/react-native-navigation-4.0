import styled from 'styled-components';

const FlexItem = styled.View`
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
