import styled from 'styled-components';

const primary = '#007bff';
const white = '#fff';
const danger = 'red';

const colors = {
  primary,
  white,
  danger,
};

const Paragraph = styled.Text`
  text-align: center;
  padding: 0;
  color: #fff;
  ${({ color }) =>
    color &&
    `
    color: ${colors[color]}
 `}
  ${({ align }) =>
    align &&
    `
    text-align: ${align}
 `}
`;

export default Paragraph;
