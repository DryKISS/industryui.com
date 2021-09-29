/**
 * Components - Form - DatePicker
 */

// React
import React from 'react'

// Date Picker
import ReactDatePicker from 'react-datepicker'

// React Hook Form
import { Controller } from 'react-hook-form'

// Style
import styled, { css } from 'styled-components'

// UI
import StyledInput from '../input/components/style'
import propTypes from './components/propTypes'

const DatePicker = ({
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
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <ReactDatePicker
            customInput={<StyledInput errors={errors[name]} />}
            onBlur={onBlur}
            onChange={(date) => {
              onChange(date)
              handleOnChange && handleOnChange(date)
            }}
            placeholderText={placeholder}
            selected={value}
            wrapperClassName="datePicker"
            {...parentProps}
          />
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

DatePicker.propTypes = propTypes

DatePicker.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'scroll',
  disableInitialDateBackground: false,
  isClearable: true,
  minDate: null,
  name: 'expiryAt',
  placeholder: 'Click to select time',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
}

export default DatePicker
