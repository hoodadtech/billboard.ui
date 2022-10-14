import styled from 'styled-components';
import { Theme } from '../../styles/_theme';
import { CustomPaginationProps } from './pagination';

export const PaginationStyle = styled.div`
	display: flex;
	position: relative;
	width: calc(100% - 32px);
	bottom: 0;
	margin: 0 auto;
	background: white;
	padding: 16px 0;
	border-top: 1px solid ${Theme.colors.borderDefaultColor};
	:first-child {
		justify-content: space-around;
	}
	${(props: CustomPaginationProps): string => {
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

			@media screen and (max-width: ${Theme.breakPoints.largePhone}px) {
				margin-top: 2rem;
			}

			a {
				color: ${Theme.colors.gray_400};
			}

			&-active {
				background-color: ${Theme.colors.primaryColor};

				a {
					color: ${Theme.colors.white};
				}
			}

			&:focus {
				background-color: ${Theme.colors.primaryColor};

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
			color: ${Theme.colors.gray_400};

			span {
				margin: 0 4px !important;
			}
		}

		&-prev {
			position: absolute;
			left: 0;
			color: ${Theme.colors.gray_400};

			span {
				transform: rotate(180deg);
				margin: 0 4px !important;
			}
		}
	}
`;
