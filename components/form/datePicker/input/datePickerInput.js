/**
 * Date Picker - Input
 */

// React
import React from 'react'
import { bool, func, number, object, string } from 'prop-types'

// UI
import Column from '../../../atoms/grid/Column'
import Row from '../../../atoms/grid/Row'
import SelectField from '../../select/select'
import Space from '../../../atoms/space/space'

// Data
import DAYS from './constants/days'
import MONTHS from './constants/months'

const DatePickerInput = ({
  data,
  errors,
  index,
  label,
  name,
  placeHolder,
  register,
  showDay,
  showMonth,
  showYear,
  yearEnd,
  yearStart
}) => {
  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <>
      <Space marginBottom="xs">{label}</Space>

      <Row>
        {showDay && (
          <Column md={4}>
            <SelectField
              {...defaultOptions}
              data={{ 'data-index': index, 'data-name': 'day' }}
              name={`day${name}`}
              options={DAYS}
            />
          </Column>
        )}

        {showMonth && (
          <Column md={4}>
            <SelectField
              {...defaultOptions}
              data={{ 'data-index': index, 'data-name': 'month' }}
              name={`month${name}`}
              options={[...MONTHS]}
            />
          </Column>
        )}

        {showYear && (
          <Column md={4}>
            <SelectField
              {...defaultOptions}
              data={{ 'data-index': index, 'data-name': 'year' }}
              name={`year${name}`}
              placeholder="Select year"
              range={[yearStart, yearEnd]}
            />
          </Column>
        )}
      </Row>
    </>
  )
}

DatePickerInput.propTypes = {
  data: object,
  errors: object.isRequired,
  index: number,
  label: string,
  name: string,
  register: func.isRequired,
  showDay: bool,
  showMonth: bool,
  showYear: bool,
  yearEnd: number,
  yearStart: number
}

DatePickerInput.defaultProps = {
  day: true,
  index: 1,
  month: true,
  showDay: true,
  showMonth: true,
  showYear: true,
  year: true,
  yearEnd: 2020,
  yearStart: 1920
}

export default DatePickerInput
