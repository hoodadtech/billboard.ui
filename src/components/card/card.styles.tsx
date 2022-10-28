import styled from 'styled-components';
import { CardProps } from './card';
import { ThemeInterface } from '../../styles/_theme';

interface Props extends Omit<CardProps, 'title'> {
	theme: ThemeInterface;
}

export const CardStyles = styled.div`
	display: inline-flex;
	align-items: center;
	padding: 24px 28px;
	gap: 16px;
	border: 1px solid ${(props: Props) => props.theme.colors.borderDefaultColor};
	border-radius: 25px;
	width: auto;
	flex: 1;
	max-width: 386px;
	min-width: 280px;
	height: 120px;

	@media screen and (max-width: ${(props: Props) => props.theme.breakPoints.phoneRotate}px) {
		max-width: 100%;
	}

	.icon {
		min-width: 64px;
		min-height: 64px;
		border-radius: 15px;
		display: inline-flex;
		justify-content: center;
		align-content: center;
		transition: all 0.2s ease-in-out;
		align-items: center;

		${(props: Props) => {
			switch (props.variant) {
				case 'primary':
					return `
            background-color:${props.theme.colors.primaryColorTransparent};
                `;
				case 'success':
					return `
            background-color:${props.theme.colors.successTransparentColor};
                `;
				case 'secondary':
					return `
            background-color: ${props.theme.colors.secondaryColorTransparent};
             `;
				case 'error':
					return `
            background-color: ${props.theme.colors.errorTransparentColor};
             `;
				case 'gray':
					return `
            background-color: rgba(125, 125, 125, 0.1);
           `;
				case 'quality':
					return `
             background-color: ${props.theme.colors.infoTransparentColor};
             `;
				case 'greenTransparent':
					return `
             background: rgba(56, 199, 117, 0.1);`;
				case 'warning':
					return `
               background-color: ${props.theme.colors.warningTransparentColor};
               `;
				case 'pink':
					return `
                 background-color: ${props.theme.colors.pinkTransparent};
                 `;
				default:
					`
        		background-color: ${props.theme.colors.transparent};
   		 	`;
			}
		}}
	}

	.details {
		height: 100%;
		display: inline-flex;
		align-content: center;
		flex-wrap: wrap;
		padding-top: 4px;

		.title {
			color: ${(props: Props) => props.theme.colors.gray_500};
			font-size: ${(props: Props) => props.theme.fontSize.sm};
			flex: 0 0 100%;
		}

		.description {
			color: ${(props: Props) => props.theme.colors.gray_900};
			font-size: ${(props: Props) => props.theme.fontSize['1xl']};
			flex: 0 0 100%;
		}
	}
`;
