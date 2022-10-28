import Styled from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ThemeInterface } from '../../../styles/_theme';

interface SearchProps {
	size?: SizeType;
	theme: ThemeInterface;
}

export const SearchStyle = Styled.div<SearchProps>`
   @media screen and (max-width: ${(props: SearchProps) => props.theme.breakPoints.smallPhone}px){
    width: 100%;
   }

   .ant-input {
    &-group-addon {
     display: none;
    }

    &-prefix {
     margin-right: 8px;
    }
   }

   .ant-input-wrapper , .ant-input-password{
    color: ${(props: SearchProps) => props.theme.colors.gray_900};
    width: 371px;
    max-width: 100%;
    height: 48px;
    border-radius: 12px !important;
    border: 1px solid ${(props: SearchProps) => props.theme.colors.borderDefaultColor};
    box-sizing: border-box;

    @media screen and (max-width: ${(props: SearchProps) => props.theme.breakPoints.largeTablet}px) {
     width: 310px;
    }

    @media screen and (max-width: ${(props: SearchProps) => props.theme.breakPoints.smallPhone}px){
     width: 100%;
    }

    &:focus, &:hover {
     border: 1px solid ${(props: SearchProps) => props.theme.colors.secondaryColor};
    }

    &:focus{
     box-shadow: 0 0 0 2px ${(props: SearchProps) => props.theme.colors.secondaryTransparentColor}
    }

    &.error {
     color: ${(props: SearchProps) => props.theme.colors.errorColor};
     border: 1px solid ${(props: SearchProps) => props.theme.colors.errorColor};

     &:focus {
      box-shadow: 0 0 0 2px ${(props: SearchProps) => props.theme.colors.errorTransparentColor}
     }
    }

    &.success {
     color: ${(props: SearchProps) => props.theme.colors.successColor};
     border: 1px solid ${(props: SearchProps) => props.theme.colors.successColor};
     box-shadow: 0 0 0 2px ${(props: SearchProps) => props.theme.colors.successTransparentColor}

     &:focus {
      box-shadow: 0 0 0 2px ${(props: SearchProps) => props.theme.colors.successTransparentColor}
     }
    }

    &:disabled {
     background-color: ${(props: SearchProps) => props.theme.colors.gray_100};
     color: ${(props: SearchProps) => props.theme.colors.gray_900};
    }

    .ant-input-affix-wrapper {
      height: 100%;
      border-radius: 12px !important;
      border: 0;

      &-focused{
       box-shadow: 0 0 0 2px ${(props: SearchProps) => props.theme.colors.secondaryTransparentColor}
      }
    }

    ${(props: SearchProps) => {
			switch (props.size) {
				case 'small':
					return `
                    width: 240px;
                `;
				default:
					return ``;
			}
		}};

    @media screen and (max-width: ${(props: SearchProps) => props.theme.breakPoints.normalPhone}px) {
     height: 44px;
    }
   }

   &.password {
    .login-inputs {
      width: 300px !important;
      margin: auto;
      display: flex;
      height: 48px;
      border-radius: 12px !important;
      border: 1px solid ${(props: SearchProps) => props.theme.colors.borderDefaultColor};
      box-sizing: border-box;

      input {
       text-align: center;
      }
    }
   }
`;
