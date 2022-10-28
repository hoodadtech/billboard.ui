import Styled from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Theme, ThemeInterface } from '../../../styles/_theme';

interface SelectProps {
	size?: SizeType;
	theme: ThemeInterface;
}

export const SelectStyle = Styled.div<SelectProps>`
   @media screen and (max-width: ${(props: SelectProps) => props.theme.breakPoints.smallPhone}px){
    width: 100%;
   }

   .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
     border: 1px solid ${(props: SelectProps) => props.theme.colors.secondaryColor};
     box-shadow: 0 0 0 2px ${(props: SelectProps) => props.theme.colors.secondaryTransparentColor};

     &.success {
      border: 1px solid ${(props: SelectProps) => props.theme.colors.successColor};
      box-shadow: 0 0 0 2px ${(props: SelectProps) => props.theme.colors.successTransparentColor};
     }
   }

   .error {
    .ant-select-selector {
     border: 1px solid ${(props: SelectProps) => props.theme.colors.errorColor};
     box-shadow: 0 0 0 2px ${(props: SelectProps) => props.theme.colors.errorTransparentColor};
    }
   }

   .ant-select {
    min-width: fit-content;
    width: 371px;
    height: 48px;

    &.with-button {
      width: 315px;
    }

    &.with-two-buttons {
      width: 258px;
    }

    @media screen and (max-width: ${(props: SelectProps) => props.theme.breakPoints.smallPhone}px){
     width: 100%;
    }

    &-selector {
     color: ${(props: SelectProps) => props.theme.colors.gray_900};
     width: 371px;
     max-width: 100%;
     height: 48px !important;
     border-radius: 12px !important;
     border: 1px solid ${(props: SelectProps) => props.theme.colors.borderDefaultColor};
     box-sizing: border-box;
     display: flex;
     align-items: center;

     &:placeholder {
      color: ${(props: SelectProps) => props.theme.colors.gray_900};
     }

     &.error {
      border: 1px solid ${(props: SelectProps) => props.theme.colors.errorColor};

      .ant-select-selection-placeholder {
       color: ${(props: SelectProps) => props.theme.colors.errorColor};
      }
     }

     &.success {
      border: 1px solid ${(props: SelectProps) => props.theme.colors.successColor};

      .ant-select-selection-placeholder {
       color: ${(props: SelectProps) => props.theme.colors.successColor};
      }
     }

     &-disabled {
      background-color: ${(props: SelectProps) => props.theme.colors.gray_100};

      .ant-select-selection-placeholder {
       color: ${(props: SelectProps) => props.theme.colors.gray_900};
      }
     }

     ${(props: SelectProps) => {
				switch (props.size) {
					case 'small':
						return `
                     width: 170px;
                 `;
					default:
						return ``;
				}
			}};

      @media screen and (max-width: ${(props: SelectProps) => props.theme.breakPoints.normalPhone}px) {
       height: 44px;
      }
     }
    }
`;

export const SelectDropdownGlobalStyle = `
 .ant-select-dropdown:not(.ant-select-dropdown-hidden) {
   z-index: 99999;
 }

 .rc-virtual-list-holder {

   &-inner {
    overflow: auto;

    &::-webkit-scrollbar {
     width: 6px;
     border-radius: 5px;
      background-color: transparent;;

     &-track {
      border-radius: 10px;
     }

     &-thumb {
      border-radius: 10px;
      background-color: ${Theme.colors.gray_400};
      -webkit-box-shadow: inset 0 0 6px ${Theme.colors.gray_400};
     }
    }
   }
 }
`;
