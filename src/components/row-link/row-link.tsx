import React, { useContext } from 'react';
import { RowLinkStyles } from './row-link.style';
import { ArrowRight } from '../icons';
import { ThemeContext } from '../theme-provider';

export interface RowLinkProps {
	title?: string;
	numberRow?: number;
	infoRight?: any;
	link?: string;
}

export const RowLink = (props: RowLinkProps) => {
	const theme = useContext(ThemeContext);

	return (
		<RowLinkStyles theme={theme}>
			<a className="link common-style" href={`${props.link}`}>
				<div className="common-style">
					{props.numberRow && <div className="number-row">{props.numberRow}</div>}
					<span className="title">{props.title}</span>
				</div>
				<div className="common-style">
					<ArrowRight />
				</div>
			</a>
		</RowLinkStyles>
	);
};
