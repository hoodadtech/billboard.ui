import Styled from 'styled-components';
import { Theme } from '../../styles/_theme';

interface JalaliDatePickerStyleProps {
   hiddenInput?: boolean;
   bordered?: boolean;
}

export const JalaliDatePickerStyle = Styled.div`
   .DatePicker {
      width: 371px;
      max-width: 100%;
      height: 48px;
      box-sizing: border-box;
      display: ${(props: JalaliDatePickerStyleProps) => props.hiddenInput ? "none" : "inline-flex"};

      input{
         width:100%;
         background:${(props: JalaliDatePickerStyleProps) => props.bordered ? Theme.colors.white : "#00000000"};
         border: ${(props: JalaliDatePickerStyleProps) => props.bordered ? `1px solid ${Theme.colors.borderDefaultColor}` : "none"};
         border-radius: 12px;
      }
      &.with-button {
       width: 315px;
      }

      @media screen and (max-width: ${Theme.breakPoints.normalPhone}px) {
        height: 44px;
      }

      &:focus, &:active, &.ant-picker-focused {
        border: 1px solid ${Theme.colors.secondaryColor};
        box-shadow: 0 0 0 2px ${Theme.colors.secondaryTransparentColor}
      }

      &.error {
       border: 1px solid ${Theme.colors.errorColor};
      }

      &.green-value {
       .ant-picker-input > input {
          color: ${Theme.colors.successColor};
       }
      }
   }
`;
