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
  padding: 0;
  color: #fff;
  font-size: 20px;


  ${({ gap }) =>
    gap &&
    `
    marginVertical: ${gap}px
 `}

  ${({ color }) =>
    color &&
    `
    color: ${colors[color] || color}
 `}

  ${({ underline }) =>
    underline &&
    `
    textDecorationLine: underline;
 `}

  ${({ bold }) =>
    bold &&
    `
    font-weight: bold
 `}
  ${({ align }) =>
    align &&
    `
    text-align: ${align}
 `}

 ${({ size }) =>
   size &&
   `
   font-size: ${size}px
   `}
`;

export default Paragraph;
