import React, { useContext } from 'react';
import { CardStyles } from './card.styles';
import { ThemeContext } from '../theme-provider';

export interface CardProps {
	icon?: React.ReactNode;
	title: string;
	description?: string | number | undefined;
	variant:
		| 'primary'
		| 'success'
		| 'secondary'
		| 'error'
		| 'gray'
		| 'quality'
		| 'warning'
		| 'pink'
		| 'greenTransparent'
		| undefined;
}

export const Card = (props: CardProps): React.ReactElement => {
	const theme = useContext(ThemeContext);

	return (
		<CardStyles theme={theme} variant={props.variant} className="card">
			{props.icon && <div className="icon">{props.icon}</div>}
			<div className="details">
				<div className="title">{props.title}</div>
				{props.description && <div className="description">{props.description}</div>}
			</div>
		</CardStyles>
	);
};
