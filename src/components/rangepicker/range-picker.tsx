import { DatePicker, TimeRangePickerProps } from 'antd';
import { DatepickerStyle } from '../datepicker/datepicker.style';
import { useContext } from 'react';
import { ThemeContext } from '../theme-provider';

const { RangePicker } = DatePicker;

const Rangepicker = (props: TimeRangePickerProps & { hiddenInput?: boolean }) => {
	const theme = useContext(ThemeContext);

	return (
		<DatepickerStyle theme={theme} hiddenInput={props.hiddenInput}>
			<RangePicker {...props} />
		</DatepickerStyle>
	);
};

export default Rangepicker;
