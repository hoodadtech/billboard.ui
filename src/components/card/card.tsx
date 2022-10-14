import React from 'react';
import Image from '../image';
import { CardStyles } from './card.styles';

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

export const Card = (props: CardProps): React.ReactElement => (
	<CardStyles variant={props.variant} className="card">
		{props.icon && <div className="icon">{props.icon}</div>}
		<div className="details">
			<div className="title">{props.title}</div>
			{props.description && <div className="description">{props.description}</div>}
		</div>
	</CardStyles>
);
