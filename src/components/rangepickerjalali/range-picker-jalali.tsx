import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import DatePickerJalali, { DayRange } from '@amir04lm26/react-modern-calendar-date-picker'
import { Moment } from 'moment';
import { useState } from 'react';
import { JalaliDatePickerStyle } from '../datepickerjalali/datepickerjalali.style';
import { Theme } from '../../styles/_theme';


const momentJalali = require("moment-jalaali")

export interface DatePickerJalaliProps {
    name?: string;
    className?: string;
    initialValue?: [Moment, Moment];
    onChange?: (value: [string, string]) => void;
    locale?: string;
}

const RangePicker = (props: DatePickerJalaliProps) => {
    const handleParseInitalDate = (value: Moment) => {
        const jalaliDate = momentJalali(value).format("jYYYY/jM/jD")?.split("/");

        return { year: Number(jalaliDate[0]), month: Number(jalaliDate[1]), day: Number(jalaliDate[2]) }
    }

    const [dayRange, setDayRange] = useState<DayRange>({
        from: props.initialValue ? handleParseInitalDate(props.initialValue[0]) : null,
        to: props.initialValue ? handleParseInitalDate(props.initialValue[1]) : null
    });

    const handleFormatDateToGregorian = (value: DayRange) => {
        if (!value) return
        const { from, to } = value;
        const rangeValue: [string, string] = ["", ""]

        if (from) {
            rangeValue[0] = momentJalali(`${from.year}/${from.month}/${from.day}`, "jYYYY-jM-jD").format("YYYY-M-D")
        }
        if (to) {
            rangeValue[1] = momentJalali(`${to.year}/${to.month}/${to.day}`, "jYYYY-jM-jD").format("YYYY-M-D")
        }

        to && from && props.onChange && props.onChange(rangeValue)
    }


    return <JalaliDatePickerStyle>
        <DatePickerJalali
            wrapperClassName={`${props.className}`}
            value={dayRange}
            onChange={(value: any) => {
                setDayRange(value)
                handleFormatDateToGregorian(value)
            }}
            colorPrimary={Theme.colors.secondaryColor}
            colorPrimaryLight={Theme.colors.primaryRangeColor}
            inputPlaceholder="انتخاب بازه زمانی"
            locale={props.locale || "fa"}
            shouldHighlightWeekends
            inputName={props?.name || undefined}
        />
    </JalaliDatePickerStyle>
}

export default RangePicker
