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
import styled, { css } from 'styled-components'

// UI
import StyledInput from '../../field/input'
import { propTypes } from './props'

const DatePickerCalendar = ({
  control,
  defaultValue,
  disableInitialDateBackground,
  errors,
  name,
  handleOnChange,
  placeholder,
  ...parentProps
}) => {
  return (
    <StyleSpan disableInitialDateBackground={disableInitialDateBackground}>
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
  ${({ disableInitialDateBackground }) =>
    disableInitialDateBackground &&
    css`
      .react-datepicker__day--keyboard-selected {
        background-color: transparent;
        color: black;
        font-weight: 500;
      }
    `}
`

DatePickerCalendar.propTypes = propTypes

DatePickerCalendar.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'scroll',
  disableInitialDateBackground: false,
  isClearable: true,
  minDate: new Date(),
  name: 'expiryAt',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
}

export default DatePickerCalendar
