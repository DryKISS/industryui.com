/**
 * Form - DatePicker - Calendar
 */

// React
import React from 'react'

// Date Picker
import ReactDatePicker from 'react-datepicker'

// React Hook Form
import { Controller } from 'react-hook-form'

// UI
import { StyledInput } from '../../../'

// Props
import { DatePickerCalendarPropTypes } from './props'

// Style
import styled from 'styled-components'

export const DatePickerCalendar = ({
  control,
  defaultValue,
  errors,
  name,
  placeholder,
  ...parentProps
}) => {
  return (
    <StyleSpan>
      <Controller
        render={(props) => (
          <ReactDatePicker
            customInput={<StyledInput errors={errors[name]} />}
            selected={props.value}
            {...props}
            {...parentProps}
            placeholderText={placeholder ?? 'Click to select time'}
            wrapperClassName="datePicker"
          />
        )}
        control={control}
        defaultValue={defaultValue}
        name={name}
      />
    </StyleSpan>
  )
}

const StyleSpan = styled.span`
  .datePicker {
    width: 100%;
  }
`

DatePickerCalendar.propTypes = DatePickerCalendarPropTypes

DatePickerCalendar.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'scroll',
  isClearable: true,
  minDate: new Date(),
  name: 'expiryAt',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
}
