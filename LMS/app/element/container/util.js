import styled from 'styled-components/native';

export const Padding = styled.View`
  padding: ${({padd}) => padd}px;
`;

export const PaddingTop = styled(Padding)`
  padding: 0;
  padding-top: ${({pdT}) => pdT}px;
`;

export const PaddingBottom = styled(Padding)`
  padding: 0;
  padding-bottom: ${({pdB}) => pdB}px;
`;

export const PaddingLeft = styled(Padding)`
  padding: 0;
  padding-left: ${({pdL}) => pdL}px;
`;

export const PaddingRight = styled(Padding)`
  padding: 0;
  padding-top: ${({pdR}) => pdR}px;
`;

export const MarginTop = styled.View`
  margin-top: ${({mt}) => mt}px;
`;
