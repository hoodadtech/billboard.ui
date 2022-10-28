import { DatePickerProps } from 'antd';
import { DatepickerStyle } from './datepicker.style';
import { useContext } from 'react';
import { ThemeContext } from '../theme-provider';

const Datepicker = (props: DatePickerProps) => {
	const theme = useContext(ThemeContext);

	return <DatepickerStyle {...props} theme={theme} className={`${props.className}`} />;
};

export default Datepicker;
