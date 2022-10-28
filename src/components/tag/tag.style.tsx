import Styled from 'styled-components';
import { ThemeInterface } from 'src/styles/_theme';
import { TagProps } from './tag';

interface Props extends TagProps {
	theme: ThemeInterface;
}

export const TagStyle = Styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border-radius: 10px;
    width: max-content;
	padding: 8px 16px;
	margin: 0;
    font-size: ${(props: Props) => props.theme.fontSize.sm};

    ${(props: Props) => {
			switch (props.status) {
				case 'warning':
					return `
					background-color: ${props.theme.colors.warningTransparentColor};
					color: ${props.theme.colors.warningColor}`;
				case 'active':
					return `
					background-color: ${props.theme.colors.infoTransparentColor};
					color: ${props.theme.colors.infoColor};`;
				case 'success':
					return `
					background-color: ${props.theme.colors.successTransparentColor};
					color: ${props.theme.colors.successColor};`;
				case 'successBold':
					return `
					background-color: ${props.theme.colors.successColor};
					color: ${props.theme.colors.white};`;
				case 'error':
					return `
					background-color: ${props.theme.colors.errorTransparentColor};
					color: ${props.theme.colors.errorColor}`;
				case 'suspended':
					return `
					background-color: ${props.theme.colors.gray_100};
					color: ${props.theme.colors.gray_500};`;
				case 'primary':
					return `
                     background-color: ${props.theme.colors.primaryColorTransparent};
                     color: ${props.theme.colors.primaryColor};`;

				case 'secondary':
				case 'leased':
					return `
                    background-color: ${props.theme.colors.secondaryTransparentColor};
                    color: ${props.theme.colors.secondaryColor};`;

				case 'gray':
					return `
          	        background-color: ${props.theme.colors.gray_100};
                    color: ${props.theme.colors.gray};`;
				default:
					return `
					background-color: ${props.theme.colors.secondaryTransparentColor};
					color: ${props.theme.colors.secondaryColor};`;
			}
		}}

    ${(props: Props) => {
			switch (props.size) {
				case 'small':
					return `
                padding: 3px 12px;
                height: 26px;
                font-size: ${props.theme.fontSize.xs};
                border-radius: 5px;
			`;
				default:
					return `
	            padding: 8px 16px;
			`;
			}
		}}
`;
