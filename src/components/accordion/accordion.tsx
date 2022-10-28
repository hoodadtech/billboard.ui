import React, { useContext } from 'react';
import { AccordionStyle } from './accordion.style';
import ButtonCustom from '../button/index';
import { ThemeContext } from '../theme-provider';

export interface AccordionProps {
	title?: string;
	children?: React.ReactNode;
	filters?: React.ReactNode;
	isAccordionOpen: boolean;
	onToggleAccordion?: () => void;
	icon?: string;
	numberRow?: number;
	date?: string;
}

const Accordion = (props: AccordionProps) => {
	const theme = useContext(ThemeContext);

	return (
		<AccordionStyle theme={theme} isAccordionOpen={props.isAccordionOpen}>
			<div className="accordion-header">
				<div className="accordion-header--left">
					{props.numberRow ? <div className="number">{props.numberRow}</div> : null}

					<div className="title">{props.title}</div>
					{props.date && (
						<div className="date">
							<span className="data-title">Date :</span>
							<span> {props.date}</span>
						</div>
					)}
				</div>

				<div className="accordion-header--right">
					{props.isAccordionOpen ? (
						props.filters
					) : (
						<div className="flex gap-x-4">
							<ButtonCustom
								onClick={props.onToggleAccordion}
								variant={props.icon ? 'transparent' : 'secondary'}
								size="small"
								icon={{
									width: props.icon ? 20 : 10,
									height: props.icon ? 20 : 10,
									src: props.icon || '/static/assets/images/icons/Plus.svg',
								}}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="accordion-content">{props.children}</div>
		</AccordionStyle>
	);
};

export default Accordion;
