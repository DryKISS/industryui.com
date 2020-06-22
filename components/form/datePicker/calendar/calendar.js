/**
 * Form - DatePicker - Calendar
 */

// React
import React from 'react'

// React Hook Form
import { Controller } from 'react-hook-form'

// Date Picker
import ReactDatePicker from 'react-datepicker'

// UI
import { StyledInput } from '../../../'

// Constants
import { PROPERTIES } from './constants'

export const DatePickerCalendar = ({ control, defaultValue, errors, name, ...parentProps }) => {
  return (
    <Controller
      render={props => (
        <ReactDatePicker
          customInput={<StyledInput errors={errors[name]} />}
          selected={props.value}
          {...props}
          {...parentProps}
        />
      )}
      control={control}
      defaultValue={defaultValue}
      name={name}
    />
  )
}

DatePickerCalendar.propTypes = PROPERTIES

DatePickerCalendar.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'scroll',
  isClearable: true,
  minDate: new Date(),
  name: 'expiryAt',
  placeholderText: 'Click to select time',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
}
