import { Moment } from 'moment/moment';

export interface RangePickerJalaliProps {
	name?: string;
	className?: string;
	initialValue?: [Moment, Moment];
	onChange?: (value: [string, string]) => void;
	locale?: string;
}
