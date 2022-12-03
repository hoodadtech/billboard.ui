import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import DatePickerJalali, { DayValue } from '@amir04lm26/react-modern-calendar-date-picker'
import { Moment } from 'moment';
import { useState } from 'react';
import { JalaliDatePickerStyle } from './datepickerjalali.style';
import { Theme } from '../../styles/_theme';


const momentJalali = require("moment-jalaali")

export interface DatePickerJalaliProps {
  name?: string;
  className?: string;
  initialDate?: Moment;
  onChange?: (value: Moment) => void;
  locale?: string;
}

const JalaliDatePicker = (props: DatePickerJalaliProps) => {
  const handleParseInitalDate = (value: Moment) => {
    const jalaliDate = momentJalali(value).format("jYYYY/jM/jD")?.split("/");

    return { year: Number(jalaliDate[0]), month: Number(jalaliDate[1]), day: Number(jalaliDate[2]) }
  }

  const [Date, setDate] = useState<DayValue>(
    props.initialDate ? handleParseInitalDate(props.initialDate) : null
  );

  const handleFormatDateToGregorian = (value: DayValue) => {
    if (!value) return
    const { day, month, year } = value;

    props.onChange && props.onChange(momentJalali(`${year}/${month}/${day}`, "jYYYY-jM-jD").format("YYYY-MM-DD"))
  }

  return <JalaliDatePickerStyle>
    <DatePickerJalali
      wrapperClassName={`${props.className}`}
      value={Date}
      onChange={(value) => {
        setDate(value)
        handleFormatDateToGregorian(value)
      }}
      colorPrimary={Theme.colors.secondaryColor}
      colorPrimaryLight={Theme.colors.primaryRangeColor}
      inputPlaceholder="انتخاب زمان"
      locale={props.locale || "fa"}
      shouldHighlightWeekends
      inputName={props?.name || undefined}
    />
  </JalaliDatePickerStyle>
}

export default JalaliDatePicker
