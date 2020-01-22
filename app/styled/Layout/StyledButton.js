import styled from 'styled-components';

const primary = '#007bff';

const backgroundColor = {
  primary: primary,
};

const StyledButton = styled.TouchableOpacity`
  border: 1px solid transparent;
  padding: 6px 12px;
  text-align: center;

  ${({ color }) =>
    primary &&
    `
    background: ${backgroundColor[color]};
  `}

`;

export default StyledButton;
