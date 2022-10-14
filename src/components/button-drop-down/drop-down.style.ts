import Styled, { StyledComponent } from 'styled-components';
import { Dropdown } from 'antd';
import { Theme } from '../../styles/_theme';

export const DropDownStyle: any = Styled(Dropdown)`
  padding:0;
  width: max-content;
  outline: 0;
  height: auto;
  border: 0;

  .ant-dropdown-trigger {
    all: unset;
  }
`;

export const ANTDropDownStyles = `
  .ant-dropdown {
   min-width: 100%;
   max-width: max-content;

   &-menu {
    border-radius: 16px;
    padding: 10px;

    &-item {
      color: ${Theme.colors.gray_900};
      font-size: ${Theme.fontSize.sm};
      border-radius: 8px;
      height: 38px;

      &:hover {
       background-color: ${Theme.colors.gray_100};
      }
    }
   }
  }
`;
