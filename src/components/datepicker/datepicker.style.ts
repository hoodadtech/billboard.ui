import Styled from 'styled-components';
import { Theme, ThemeInterface } from '../../styles/_theme';
import { DatePicker } from 'antd';

interface DatePickerStyleProps {
	hiddenInput?: boolean;
}

export const DatepickerDropdownGlobalStyle = `
 .ant-picker-header {
   color: ${Theme.colors.gray_800};

  .ant-picker-header-super-prev-btn, .ant-picker-header-super-next-btn ,
  .ant-picker-header-prev-btn, .ant-picker-header-next-btn {
    color: ${Theme.colors.gray_500};
  }
 }

 .ant-picker-panel-container, .ant-picker-panel,
 .ant-picker-decade-panel, .ant-picker-year-panel, .ant-picker-quarter-panel,
 .ant-picker-month-panel, .ant-picker-week-panel, .ant-picker-date-panel, .ant-picker-time-panel
 {
   min-width: 371px;
   width: 371px;
 }

 .ant-picker-dropdown-range {
  .ant-picker-panel-container, .ant-picker-panel,
  .ant-picker-decade-panel, .ant-picker-year-panel, .ant-picker-quarter-panel,
  .ant-picker-month-panel, .ant-picker-week-panel, .ant-picker-date-panel, .ant-picker-time-panel
  {
    width:auto;
    background-color:red;
  }
 }

 .ant-picker-date-panel .ant-picker-content {
   width: 352px;
 }

 .ant-picker-panel-container {
  border-radius: 12px;

  .ant-picker-today-btn{
   color: ${Theme.colors.secondaryColor};
  }
 }

 .ant-picker-content {
  thead {
   tr {
    th {
     color: ${Theme.colors.gray_500};
    }
   }
  }

  tbody {
   .ant-picker-cell {
    color: ${Theme.colors.gray_400};
    height: 35px;

    &:before {
     min-width: 35px;
     max-width: 35px;
     height: 35px;
     left: 7.5px;
     border-radius: 5px;
    }

    &-in-view {
     color: ${Theme.colors.gray_900};

     &:before {
      background-color: ${Theme.colors.gray_100};
     }
    }

    &-today {
     .ant-picker-cell-inner {
      border: 1px solid ${Theme.colors.secondaryColor};
      color: ${Theme.colors.secondaryColor};
      background-color: ${Theme.colors.secondaryTransparentColor};

      &:before {
       border: 0;
      }
     }
    }

    &-selected, &-range-end, &-range-start {
     .ant-picker-cell-inner {
      color: ${Theme.colors.white};
      background-color: ${Theme.colors.secondaryColor};
     }
    }

     &-inner {
      min-width: 35px;
      max-width: 35px;
      height: 35px;
      line-height: 35px;
      border-radius: 5px !important;
     }
   }
  }
 }

 .ant-picker-month-panel, .ant-picker-year-panel {
  .ant-picker-content {
   .ant-picker-cell {
    &-inner , &:before {
     max-width: 100px;
     width: 100px;
    }
   }
  }
 }
`;

interface Props extends DatePickerStyleProps {
	theme: ThemeInterface;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const DatepickerStyle = Styled(DatePicker)`
   width: 371px;
   max-width: 100%;
   height: 48px;
   background: ${(props: Props) => props.theme.colors.white};
   box-sizing: border-box;
   border: 1px solid ${(props: Props) => props.theme.colors.borderDefaultColor};
   border-radius: 12px;
   display: ${(props: Props) => (props.hiddenInput ? 'none' : 'inline-flex')};
   &.with-button {
     width: 315px;
   }

   @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.normalPhone}px) {
     height: 44px;
   }

   &:focus, &:active, &.ant-picker-focused {
     border: 1px solid ${(props: Props) => props.theme.colors.secondaryColor};
     box-shadow: 0 0 0 2px ${(props: Props) => props.theme.colors.secondaryTransparentColor}
   }

   &.error {
     border: 1px solid ${(props: Props) => props.theme.colors.errorColor};
   }

   &.green-value {
    .ant-picker-input > input {
       color: ${(props: Props) => props.theme.colors.successColor};
    }
   }

   .ant-picker-header {
     background: red;
   }
`;
