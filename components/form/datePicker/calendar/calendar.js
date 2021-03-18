/**
 * Components - Form - DatePicker - Calendar
 */

// React
import React from 'react'

// Date Picker
import DatePicker from 'react-datepicker'

// React Hook Form
import { Controller } from 'react-hook-form'

// Style
import styled from 'styled-components'

// UI
import { StyledInput } from '../../field/input'
import { propTypes } from './props'

export const DatePickerCalendar = ({
  control,
  defaultValue,
  errors,
  name,
  handleOnChange,
  placeholder,
  ...parentProps
}) => {
  return (
    <StyleSpan>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ onChange, onBlur, value, name, ref }) => (
          <>
            <DatePicker
              customInput={<StyledInput errors={errors[name]} />}
              onBlur={onBlur}
              onChange={(date) => {
                onChange(date)
                handleOnChange && handleOnChange(date)
              }}
              placeholderText={placeholder ?? 'Click to select time'}
              selected={value}
              wrapperClassName="datePicker"
              {...parentProps}
            />
          </>
        )}
      />
    </StyleSpan>
  )
}

const StyleSpan = styled.span`
  .datePicker {
    width: 100%;
  }
`

DatePickerCalendar.propTypes = propTypes

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
