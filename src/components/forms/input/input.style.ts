import Styled from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Theme } from '../../../styles/_theme';

interface InputProps {
	size?: SizeType;
	fullWidth?: boolean;
}

export const InputStyle = Styled.div`
   @media screen and (max-width: ${Theme.breakPoints.smallPhone}px){
    width: 100%;
   }
   
   input {
    color: ${Theme.colors.gray_900};
    min-width: fit-content;
    width: 371px;
    max-width: 100%;
    height: 48px;
    border-radius: 12px;
    border: 1px solid ${Theme.colors.borderDefaultColor};
    box-sizing: border-box;
      
    @media screen and (max-width: ${Theme.breakPoints.largeTablet}px) {
     width: 310px;
    }
    
    &:focus, &:hover {
     border: 1px solid ${Theme.colors.secondaryColor};
    }
    
    &:focus{
     box-shadow: 0 0 0 2px ${Theme.colors.secondaryTransparentColor}
    }
   
    &.error {
     color: ${Theme.colors.errorColor};
     border: 1px solid ${Theme.colors.errorColor};
     
     &:focus {
      box-shadow: 0 0 0 2px ${Theme.colors.errorTransparentColor}
     }
    }
   
    &.success {
     color: ${Theme.colors.successColor};
     border: 1px solid ${Theme.colors.successColor};
     box-shadow: 0 0 0 2px ${Theme.colors.successTransparentColor}
     
     &:focus {
      box-shadow: 0 0 0 2px ${Theme.colors.successTransparentColor}
     }
    }
    
    &:disabled {
     background-color: ${Theme.colors.gray_100};
     color: ${Theme.colors.gray_900};
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
      
                    @media screen and (max-width: ${Theme.breakPoints.largeTablet}px) {
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
      
    @media screen and (max-width: ${Theme.breakPoints.normalPhone}px) {
     height: 44px;
    }
    
    @media screen and (max-width: ${Theme.breakPoints.smallPhone}px){
     width: 100%;
    }
   }
`;
