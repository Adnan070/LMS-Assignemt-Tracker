import styled from 'styled-components/native';
import {
  Padding,
  PaddingTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  MarginTop,
  // MarginBottom,
  // MarginLeft,
  // MarginRight,
  // Margin,
} from './util';
export const FlexOne = styled.View`
  flex: 1;
  ${({middle}) => {
    if (middle) {
      return 'justify-content: center;\
              align-items: center;';
    }
  }}
`;

export const UserInfo = styled.View`
  margin-left: 15px;
  flex-direction: column;
`;
export const UserInfoSection = styled(MarginTop)`
  flex-direction: row;
`;

export {
  Padding,
  PaddingTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  MarginTop,
  // MarginBottom,
  // MarginLeft,
  // MarginRight,
  // Margin,
};
