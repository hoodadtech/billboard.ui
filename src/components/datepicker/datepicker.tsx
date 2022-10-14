import { DatePickerProps } from 'antd';
import { DatepickerStyle } from './datepicker.style';

const Datepicker = (props: DatePickerProps) => <DatepickerStyle {...props} className={`${props.className}`} />;

export default Datepicker;
