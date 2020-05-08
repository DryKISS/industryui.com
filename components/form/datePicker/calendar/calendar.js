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

export const DatePickerCalendar = ({ control, defaultValue, errors, name, ...props }) => {
  return (
    <Controller
      as={<ReactDatePicker customInput={<StyledInput errors={errors.expiryAt} />} {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      onChange={([selected]) => {
        return selected
      }}
      valueName='selected'
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
