import Styled from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';

import { ThemeInterface } from '../../../styles/_theme';

interface AutoCompleteStyleProps {
	size?: SizeType;
	theme: ThemeInterface;
}

export const AutoCompleteStyle = Styled.div<AutoCompleteStyleProps>`
    .ant-select {
       width: 371px !important;

       @media screen and (max-width: ${(props: AutoCompleteStyleProps) => props.theme.breakPoints.smallPhone}px){
        width: 100%;
       }
        &-group-addon {
         display: none;
        }

        &-prefix {
         margin-right: 8px;
        }
    }

   .ant-select-selector {
    color: ${(props: AutoCompleteStyleProps) => props.theme.colors.gray_900};
    display: inline-flex;
    align-items: center;
    width: 371px !important;
    max-width: 100%;
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid ${(props: AutoCompleteStyleProps) => props.theme.colors.borderDefaultColor};
    box-sizing: border-box;

    @media screen and (max-width: ${(props: AutoCompleteStyleProps) => props.theme.breakPoints.largeTablet}px) {
     width: 310px;
    }

    @media screen and (max-width: ${(props: AutoCompleteStyleProps) => props.theme.breakPoints.smallPhone}px){
     width: 100%;
    }

    &:focus, &:hover {
     border: 1px solid ${(props: AutoCompleteStyleProps) => props.theme.colors.secondaryColor};
    }

    &:focus{
     box-shadow: 0 0 0 2px ${(props: AutoCompleteStyleProps) => props.theme.colors.secondaryTransparentColor}
    }

    &.error {
     color: ${(props: AutoCompleteStyleProps) => props.theme.colors.errorColor};
     border: 1px solid ${(props: AutoCompleteStyleProps) => props.theme.colors.errorColor};

     &:focus {
      box-shadow: 0 0 0 2px ${(props: AutoCompleteStyleProps) => props.theme.colors.errorTransparentColor}
     }
    }

    &.success {
     color: ${(props: AutoCompleteStyleProps) => props.theme.colors.successColor};
     border: 1px solid ${(props: AutoCompleteStyleProps) => props.theme.colors.successColor};
     box-shadow: 0 0 0 2px ${(props: AutoCompleteStyleProps) => props.theme.colors.successTransparentColor}

     &:focus {
      box-shadow: 0 0 0 2px ${(props: AutoCompleteStyleProps) => props.theme.colors.successTransparentColor}
     }
    }

    &:disabled {
     background-color: ${(props: AutoCompleteStyleProps) => props.theme.colors.gray_100};
     color: ${(props: AutoCompleteStyleProps) => props.theme.colors.gray_900};
    }

    .ant-select-selection-search-input {
      height: 100% !important;
      border-radius: 12px !important;
      border: 0;

      &-focused{
       box-shadow: 0 0 0 2px ${(props: AutoCompleteStyleProps) => props.theme.colors.secondaryTransparentColor}
      }
    }

    ${(props: AutoCompleteStyleProps) => {
			switch (props.size) {
				case 'small':
					return `
                    width: 240px;
                `;
				default:
					return ``;
			}
		}};

    @media screen and (max-width: ${(props: AutoCompleteStyleProps) => props.theme.breakPoints.normalPhone}px) {
     height: 44px;
    }
   }
`;
