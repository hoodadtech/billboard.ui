import * as React from 'react';

import Rangepicker from './range-picker-jalali';

export default {
	title: 'Components/RangepickerJalali',
	component: Rangepicker,
};

export const _Rangepicker = (): React.ReactElement => (
	<Rangepicker
		onChange={() => {
			// get start and end date
		}}
	/>
);
