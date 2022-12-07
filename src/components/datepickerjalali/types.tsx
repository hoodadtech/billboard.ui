import { Moment } from 'moment/moment';

export interface DatePickerJalaliProps {
	name?: string;
	className?: string;
	initialDate?: Moment;
	onChange?: (value: Moment) => void;
	locale?: string;
	bordered?:boolean;
}
