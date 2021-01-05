import styled from 'styled-components/native';

export const SimpleButton = styled.TouchableOpacity`
  height: 50px;
  width: 120px;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  background-color: ${({bg, theme}) => (bg ? bg : theme.colors.primary)};
  color: ${({fg, theme}) => (fg ? fg : theme.colors.secondary)};
`;
