import Styled from 'styled-components';
import { Theme } from 'src/styles/_theme'; 
import { TagProps } from './tag';

export const TagStyle = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border-radius: 10px;
    width: max-content;
	padding: 8px 16px;
	margin: 0;
    font-size: ${Theme.fontSize.sm};

    ${(props: TagProps) => {
			switch (props.status) {
				case 'warning':
					return `
					background-color: ${Theme.colors.warningTransparentColor};
					color: ${Theme.colors.warningColor}`;
				case 'active':
					return `
					background-color: ${Theme.colors.infoTransparentColor}; 
					color: ${Theme.colors.infoColor};`;
				case 'success':
					return `
					background-color: ${Theme.colors.successTransparentColor}; 
					color: ${Theme.colors.successColor};`;
				case 'successBold':
					return `
					background-color: ${Theme.colors.successColor}; 
					color: ${Theme.colors.white};`;
				case 'error':
					return `
					background-color: ${Theme.colors.errorTransparentColor}; 
					color: ${Theme.colors.errorColor}`;
				case 'suspended':
					return `
					background-color: ${Theme.colors.gray_100};
					color: ${Theme.colors.gray_500};`;
				case 'primary':
					return `
                     background-color: ${Theme.colors.primaryColorTransparent};
                     color: ${Theme.colors.primaryColor};`;

				case 'secondary':
				case 'leased':
					return `
                    background-color: ${Theme.colors.secondaryTransparentColor};
                    color: ${Theme.colors.secondaryColor};`;

				case 'gray':
					return `
          	        background-color: ${Theme.colors.gray_100};
                    color: ${Theme.colors.gray};`;
				default:
					return `
					background-color: ${Theme.colors.secondaryTransparentColor}; 
					color: ${Theme.colors.secondaryColor};`;
			}
		}}
         
    ${(props: TagProps) => {
			switch (props.size) {
				case 'small':
					return `
                padding: 3px 12px;
                height: 26px;
                font-size: ${Theme.fontSize.xs};
                border-radius: 5px;
			`;
				default:
					return `
	            padding: 8px 16px;
			`;
			}
		}}
`;
