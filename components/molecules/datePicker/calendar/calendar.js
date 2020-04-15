/**
 * DatePicker - Calendar
 */

// React
import React from 'react'

// Date Picker
import ReactDatePicker from 'react-datepicker'

// UI
import { StyledInput } from '../../../'

// Constants
import { PROPERTIES } from './constants'

export const DatePickerCalendar = ({ Controller, control, errors, name, ...props }) => {
  return (
    <Controller
      as={<ReactDatePicker {...props} customInput={<StyledInput errors={errors.expiryAt} />} />}
      control={control}
      name={name}
      onChange={([selected]) => {
        return selected
      }}
      rules={{
        required: true
      }}
      valueName='selected'
    />
  )
}

DatePickerCalendar.propTypes = PROPERTIES

DatePickerCalendar.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'select',
  isClearable: true,
  locale: 'en-GB',
  minDate: new Date(),
  name: 'expiryAt',
  placeholderText: 'Click to select time',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
}
