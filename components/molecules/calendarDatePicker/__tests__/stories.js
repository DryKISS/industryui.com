/**
 * Calendar Date Picker
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
import { CalendarDatePicker } from '../'
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
  title: 'Molecules/Calendar Date Picker',
  component: CalendarDatePicker,
  decorators: [centerDecorator, Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const useKnobs = () => {
  const knobs = {
    // boolean
    adjustDateOnChange: boolean('adjustDateOnChange', false),
    allowSameDay: boolean('allowSameDay', false),
    autoFocus: boolean('allowSameDay', false),
    disabled: boolean('disabled', false),
    disabledKeyboardNavigation: boolean('disabledKeyboardNavigation', false),
    fixedHeight: boolean('fixedHeight', false),
    inline: boolean('inline', false),
    isClearable: boolean('isClearable', false),
    peekNextMonth: boolean('peekNextMonth', false),
    preventOpenOnFocus: boolean('preventOpenOnFocus', false),
    readOnly: boolean('readOnly', false),
    required: boolean('required', false),
    scrollableYearDropdown: boolean('scrollableYearDropdown', false),
    scrollableMonthYearDropdown: boolean('scrollableMonthYearDropdown', false),
    selectsEnd: boolean('selectsEnd', false),
    selectsStart: boolean('selectsStart', false),
    showMonthDropdown: boolean('showMonthDropdown', false),
    showPreviousMonths: boolean('showPreviousMonths', false),
    showMonthYearDropdown: boolean('showMonthYearDropdown', false),
    showWeekNumbers: boolean('showWeekNumbers', false),
    showYearDropdown: boolean('showYearDropdown', false),
    strictParsing: boolean('strictParsing', false),
    forceShowMonthNavigation: boolean('forceShowMonthNavigation', false),
    showDisabledMonthNavigation: boolean('showDisabledMonthNavigation', false),
    startOpen: boolean('startOpen', false),
    useWeekdaysShort: boolean('useWeekdaysShort', false),
    withPortal: boolean('withPortal', false),
    shouldCloseOnSelect: boolean('shouldCloseOnSelect', true),
    showTimeInput: boolean('showTimeInput', false),
    showMonthYearPicker: boolean('showMonthYearPicker', false),
    showQuarterYearPicker: boolean('showQuarterYearPicker', false),
    showTimeSelect: boolean('showTimeSelect', true),
    showTimeSelectOnly: boolean('showTimeSelectOnly', false),
    useShortMonthInDropdown: boolean('useShortMonthInDropdown', false),
    inlineFocusSelectedMonth: boolean('inlineFocusSelectedMonth', false),
    showPopperArrow: boolean('showPopperArrow', true),
    // number
    monthsShown: number('monthsShown', 1),
    tabIndex: number('tabIndex', 1),
    yearDropdownItemNumber: number('yearDropdownItemNumber', 1),
    timeIntervals: number('timeIntervals (showTimeSelect must be true)', 30),
    // select
    dateFormat: select(
      'dateFormat',
      ['MM/dd/yyyy', 'MMMM d, yyyy h:mm aa', 'dd-M-yyyy hh:mm:ss', 'dd MMMM yyyy'],
      'MMMM d, yyyy h:mm aa'
    ),
    dropdownMode: select('dropdownMode', ['scroll', 'select'], 'scroll'),
    // text
    name: text('name', ''),
    timeCaption: text('timeCaption', 'Time'),
    previousMonthButtonLabel: text('previousMonthButtonLabel', 'Previous Month'),
    nextMonthButtonLabel: text('nextMonthButtonLabel', 'Next Month'),
    previousYearButtonLabel: text('previousYearButtonLabel', 'Previous Year'),
    nextYearButtonLabel: text('nextYearButtonLabel', 'Next Year'),
    timeInputLabel: text('timeInputLabel', 'Time')
  }

  return knobs
}

export const main = () => {
  const [startDate, setStartDate] = useState(new Date())
  const knobs = useKnobs()

  return (
    <CalendarDatePicker selected={startDate} onChange={date => setStartDate(date)} {...knobs} />
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
    const tooltipText = `No need to pay`
    const isFree = stringifyArray(freeDays).includes(date.toString())
    return isFree ? <span title={tooltipText}>{day}</span> : day
  }

  return (
    <>
      Our Schedule: 9:30AM - 6:30PM, Monday - Friday
      <br />
      <br />
      <CalendarDatePicker
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
      </CalendarDatePicker>
    </>
  )
}
