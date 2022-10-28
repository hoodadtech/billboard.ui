import styled from 'styled-components';
import { ThemeInterface } from '../../styles/_theme';
import { CustomPaginationProps } from './pagination';

interface Props extends CustomPaginationProps {
	theme: ThemeInterface;
}

export const PaginationStyle = styled.div<Props>`
	display: flex;
	position: relative;
	width: calc(100% - 32px);
	bottom: 0;
	margin: 0 auto;
	background: white;
	padding: 16px 0;
	border-top: 1px solid ${(props: Props) => props.theme.colors.borderDefaultColor};
	:first-child {
		justify-content: space-around;
	}
	${(props: Props): string => {
		switch (props.justifyContent) {
			case 'center':
				return `
             justify-content: center;
            `;
			case 'right':
				return `
             justify-content: flex-end;
            `;
			case 'left':
			default:
				return `
             justify-content: flex-start;
            `;
		}
	}};

	.ant-pagination {
		ul {
		}
		&-item {
			border-radius: 10px;
			width: 40px;
			height: 40px;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			border: none;

			@media screen and (max-width: ${(props: Props) => props.theme.breakPoints.largePhone}px) {
				margin-top: 2rem;
			}

			a {
				color: ${(props: Props) => props.theme.colors.gray_400};
			}

			&-active {
				background-color: ${(props: Props) => props.theme.colors.primaryColor};

				a {
					color: ${(props: Props) => props.theme.colors.white};
				}
			}

			&:focus {
				background-color: ${(props: Props) => props.theme.colors.primaryColor};

				a {
					color: #fff;
				}
			}
		}

		&-options {
			display: none;
		}

		&-next {
			position: absolute;
			right: 0;
			color: ${(props: Props) => props.theme.colors.gray_400};

			span {
				margin: 0 4px !important;
			}
		}

		&-prev {
			position: absolute;
			left: 0;
			color: ${(props: Props) => props.theme.colors.gray_400};

			span {
				transform: rotate(180deg);
				margin: 0 4px !important;
			}
		}
	}
`;
