import Styled from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ThemeInterface } from '../../../styles/_theme';

interface InputProps {
	size?: SizeType;
	fullWidth?: boolean;
	theme: ThemeInterface;
}

export const InputStyle = Styled.div<InputProps>`
   @media screen and (max-width: ${(props: InputProps) => props.theme.breakPoints.smallPhone}px){
    width: 100%;
   }

   input {
    color: ${(props: InputProps) => props.theme.colors.gray_900};
    min-width: fit-content;
    width: 371px;
    max-width: 100%;
    height: 48px;
    border-radius: 12px;
    border: 1px solid ${(props: InputProps) => props.theme.colors.borderDefaultColor};
    box-sizing: border-box;

    @media screen and (max-width: ${(props: InputProps) => props.theme.breakPoints.largeTablet}px) {
     width: 310px;
    }

    &:focus, &:hover {
     border: 1px solid ${(props: InputProps) => props.theme.colors.secondaryColor};
    }

    &:focus{
     box-shadow: 0 0 0 2px ${(props: InputProps) => props.theme.colors.secondaryTransparentColor}
    }

    &.error {
     color: ${(props: InputProps) => props.theme.colors.errorColor};
     border: 1px solid ${(props: InputProps) => props.theme.colors.errorColor};

     &:focus {
      box-shadow: 0 0 0 2px ${(props: InputProps) => props.theme.colors.errorTransparentColor}
     }
    }

    &.success {
     color: ${(props: InputProps) => props.theme.colors.successColor};
     border: 1px solid ${(props: InputProps) => props.theme.colors.successColor};
     box-shadow: 0 0 0 2px ${(props: InputProps) => props.theme.colors.successTransparentColor}

     &:focus {
      box-shadow: 0 0 0 2px ${(props: InputProps) => props.theme.colors.successTransparentColor}
     }
    }

    &:disabled {
     background-color: ${(props: InputProps) => props.theme.colors.gray_100};
     color: ${(props: InputProps) => props.theme.colors.gray_900};
    }

    &.with-button {
      width: 315px;
    }

    &.with-two-buttons {
      width: 258px;
    }

    ${(props: InputProps) => {
			switch (props.size) {
				case 'small':
					return `
                    width: 170px;

                    &.smaller {
                      max-width: 145px;
                      width: 145px;
                      min-width: 145px;
                    }

                    @media screen and (max-width: ${props.theme.breakPoints.largeTablet}px) {
                     width: 145px;
                    }
                `;
				case 'large':
					return `
                    width: 770px;
                `;
				default:
					return ``;
			}
		}};

    ${(props: InputProps) => {
			if (props.fullWidth) {
				return `width: 100% !important;`;
			}
		}};

    @media screen and (max-width: ${(props: InputProps) => props.theme.breakPoints.normalPhone}px) {
     height: 44px;
    }

    @media screen and (max-width: ${(props: InputProps) => props.theme.breakPoints.smallPhone}px){
     width: 100%;
    }
   }
`;
