import Styled from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';

import { Theme } from '../../../styles/_theme';

interface AutoCompleteStyleProps {
	size?: SizeType;
}

export const AutoCompleteStyle = Styled.div`
    .ant-select {
       width: 371px !important;
        
       @media screen and (max-width: ${Theme.breakPoints.smallPhone}px){
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
    color: ${Theme.colors.gray_900};
    display: inline-flex;
    align-items: center;
    width: 371px !important;
    max-width: 100%;
    height: 48px !important;
    border-radius: 12px !important;
    border: 1px solid ${Theme.colors.borderDefaultColor};
    box-sizing: border-box;
    
    @media screen and (max-width: ${Theme.breakPoints.largeTablet}px) {
     width: 310px;
    }
    
    @media screen and (max-width: ${Theme.breakPoints.smallPhone}px){
     width: 100%;
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
    
    .ant-select-selection-search-input {
      height: 100% !important;
      border-radius: 12px !important;
      border: 0;
    
      &-focused{
       box-shadow: 0 0 0 2px ${Theme.colors.secondaryTransparentColor}
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
      
    @media screen and (max-width: ${Theme.breakPoints.normalPhone}px) {
     height: 44px;
    }
   }
`;
