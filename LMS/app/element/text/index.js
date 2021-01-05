import styled from 'styled-components/native';

export const PlainText = styled.Text`
  font-family: ${(props) => (props.family ? props.family : 'RobotoRegular')};
  font-size: ${({size}) => (size ? size : 15)}px;
  font-weight: ${({weight}) => (weight ? weight : 500)};
  color: ${({color}) => (color ? color : '#222')};
  margin-top: ${(props) => props.mt};
`;

export const Title = styled.Text`
  margin-top: ${({mt}) => mt}px;
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: 'bold';
`;
