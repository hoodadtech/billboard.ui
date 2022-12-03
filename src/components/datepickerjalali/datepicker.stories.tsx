import * as React from 'react';

import JalaliDatePicker from './datepickerjalali';

export default {
    title: 'Components/JalaliDatePicker',
    component: JalaliDatePicker,
};

export const _JalaliDatePicker = (): React.ReactElement => (
    <JalaliDatePicker onChange={() => {
        // get date
    }}/>
);
