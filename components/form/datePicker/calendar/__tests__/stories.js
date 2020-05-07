/**
 * Form - DatePicker - Calendar
 */

// React
import React, { useState } from 'react'

// Storybook
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Date utility
import addDays from 'date-fns/addDays'
import getDay from 'date-fns/getDay'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

// UI
import { DatePickerCalendar } from 'components'
import Readme from '../README.md'

const centerDecorator = story => (
  <div
    style={{
      margin: '0 auto',
      textAlign: 'center'
    }}
  >
    {story()}
  </div>
)

export default {
  title: 'Form/Date Picker/Calendar',
  component: DatePickerCalendar,
  decorators: [centerDecorator, Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const useKnobs = () => {
  const groupIdBoolean = 'Booleans'
  const groupIdNumber = 'Numbers'
  const groupIdSelect = 'Selects'
  const groupIdText = 'Texts'

  const knobs = {
    // boolean
    adjustDateOnChange: boolean('adjustDateOnChange', false, groupIdBoolean),
    allowSameDay: boolean('allowSameDay', false, groupIdBoolean),
    autoFocus: boolean('allowSameDay', false, groupIdBoolean),
    disabled: boolean('disabled', false, groupIdBoolean),
    disabledKeyboardNavigation: boolean('disabledKeyboardNavigation', false, groupIdBoolean),
    fixedHeight: boolean('fixedHeight', false, groupIdBoolean),
    inline: boolean('inline', false, groupIdBoolean),
    isClearable: boolean('isClearable', false, groupIdBoolean),
    peekNextMonth: boolean('peekNextMonth', false, groupIdBoolean),
    preventOpenOnFocus: boolean('preventOpenOnFocus', false, groupIdBoolean),
    readOnly: boolean('readOnly', false, groupIdBoolean),
    required: boolean('required', false, groupIdBoolean),
    scrollableYearDropdown: boolean('scrollableYearDropdown', false, groupIdBoolean),
    scrollableMonthYearDropdown: boolean('scrollableMonthYearDropdown', false, groupIdBoolean),
    selectsEnd: boolean('selectsEnd', false, groupIdBoolean),
    selectsStart: boolean('selectsStart', false, groupIdBoolean),
    showMonthDropdown: boolean('showMonthDropdown', false, groupIdBoolean),
    showPreviousMonths: boolean('showPreviousMonths', false, groupIdBoolean),
    showMonthYearDropdown: boolean('showMonthYearDropdown', false, groupIdBoolean),
    showWeekNumbers: boolean('showWeekNumbers', false, groupIdBoolean),
    showYearDropdown: boolean('showYearDropdown', false, groupIdBoolean),
    strictParsing: boolean('strictParsing', false, groupIdBoolean),
    forceShowMonthNavigation: boolean('forceShowMonthNavigation', false, groupIdBoolean),
    showDisabledMonthNavigation: boolean('showDisabledMonthNavigation', false, groupIdBoolean),
    startOpen: boolean('startOpen', false, groupIdBoolean),
    useWeekdaysShort: boolean('useWeekdaysShort', false, groupIdBoolean),
    withPortal: boolean('withPortal', false, groupIdBoolean),
    shouldCloseOnSelect: boolean('shouldCloseOnSelect', true, groupIdBoolean),
    showTimeInput: boolean('showTimeInput', false, groupIdBoolean),
    showMonthYearPicker: boolean('showMonthYearPicker', false, groupIdBoolean),
    showQuarterYearPicker: boolean('showQuarterYearPicker', false, groupIdBoolean),
    showTimeSelect: boolean('showTimeSelect', true, groupIdBoolean),
    showTimeSelectOnly: boolean('showTimeSelectOnly', false, groupIdBoolean),
    useShortMonthInDropdown: boolean('useShortMonthInDropdown', false, groupIdBoolean),
    inlineFocusSelectedMonth: boolean('inlineFocusSelectedMonth', false, groupIdBoolean),
    showPopperArrow: boolean('showPopperArrow', true, groupIdBoolean),
    // number
    monthsShown: number('monthsShown', 1, {}, groupIdNumber),
    tabIndex: number('tabIndex', 1, {}, groupIdNumber),
    yearDropdownItemNumber: number('yearDropdownItemNumber', 1, {}, groupIdNumber),
    timeIntervals: number('timeIntervals (showTimeSelect must be true)', 30, {}, groupIdNumber),
    // select
    dateFormat: select(
      'dateFormat',
      ['MM/dd/yyyy', 'MMMM d, yyyy h:mm aa', 'dd-M-yyyy hh:mm:ss', 'dd MMMM yyyy'],
      'MMMM d, yyyy h:mm aa',
      groupIdSelect
    ),
    dropdownMode: select('dropdownMode', ['scroll', 'select'], 'scroll', groupIdSelect),
    // text
    name: text('name', '', groupIdText),
    timeCaption: text('timeCaption', 'Time', groupIdText),
    previousMonthButtonLabel: text('previousMonthButtonLabel', 'Previous Month', groupIdText),
    nextMonthButtonLabel: text('nextMonthButtonLabel', 'Next Month', groupIdText),
    previousYearButtonLabel: text('previousYearButtonLabel', 'Previous Year', groupIdText),
    nextYearButtonLabel: text('nextYearButtonLabel', 'Next Year', groupIdText),
    timeInputLabel: text('timeInputLabel', 'Time', groupIdText)
  }

  return knobs
}

export const main = () => {
  const [startDate, setStartDate] = useState(new Date())
  const knobs = useKnobs()

  return (
    <DatePickerCalendar selected={startDate} onChange={date => setStartDate(date)} {...knobs} />
  )
}

export const WorkingHours = () => {
  const [startDate, setStartDate] = useState(null)
  const knobs = useKnobs()
  const placeholder = 'Select your appointment...'
  const isWeekday = date => {
    const day = getDay(date)
    return day !== 0 && day !== 6
  }

  const holidays = [
    new Date(2019, 11, 25), // Christmas
    addDays(new Date(2019, 11, 25), 1) // Boxing Day
  ]

  const freeDays = [
    new Date(2019, 10, 27),
    new Date(2019, 11, 24),
    new Date(2019, 11, 17),
    new Date(2019, 11, 10)
  ]

  const stringifyArray = arr => arr.map(item => item.toString())

  const renderDayContents = (day, date) => {
    const tooltipText = 'No need to pay'
    const isFree = stringifyArray(freeDays).includes(date.toString())
    return isFree ? <span title={tooltipText}>{day}</span> : day
  }

  return (
    <>
      Our Schedule: 9:30AM - 6:30PM, Monday - Friday
      <DatePickerCalendar
        selected={startDate}
        onChange={date => setStartDate(date)}
        minTime={setHours(setMinutes(new Date(), 30), 9)}
        maxTime={setHours(setMinutes(new Date(), 30), 18)}
        excludeDates={holidays}
        highlightDates={freeDays}
        renderDayContents={renderDayContents}
        filterDate={isWeekday}
        placeholderText={placeholder}
        {...knobs}
      >
        <div>
          <span style={{ color: '#3dcc4a' }}>*50% Discount</span>
        </div>
      </DatePickerCalendar>
    </>
  )
}
