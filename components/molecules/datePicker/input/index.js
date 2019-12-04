/**
 * Date Picker - Input
 */

// React
import { any, bool, func, number, object, string } from 'prop-types'

// UI
import { Column, Row, Select } from '../../../'

// Data
import { DAYS, MONTHS } from './constants/dates'

// Style
import styled from 'styled-components'

export const DatePickerInput = ({
  change,
  data,
  day,
  id,
  index,
  label,
  month,
  required,
  year,
  yearEnd,
  yearStart
}) => {
  const years = () => {
    const years = [{ disabled: true, text: 'Select year', value: '' }]

    for (let y = yearEnd; y >= yearStart; y--) {
      years.push({ text: y, value: y })
    }

    return (
      <Select
        change={change}
        id={`year${id}`}
        options={years}
        required={required}
        value={year}
        data={{ 'data-index': index, 'data-name': 'year' }}
      />
    )
  }

  return (
    <>
      <StyledLabelText>{label}</StyledLabelText>

      <Row>
        {day !== false && (
          <Column md={4}>
            <Select
              change={change}
              id={`day${id}`}
              options={DAYS}
              required={required}
              value={day}
              data={{ 'data-index': index, 'data-name': 'day' }}
            />
          </Column>
        )}

        <Column md={4}>
          <Select
            change={change}
            id={`month${id}`}
            options={MONTHS}
            required={required}
            value={month}
            data={{ 'data-index': index, 'data-name': 'month' }}
          />
        </Column>

        <Column md={4}>{years()}</Column>
      </Row>
    </>
  )
}

const StyledLabelText = styled.div`
  margin-bottom: 0.5rem;
`

DatePickerInput.propTypes = {
  change: func.isRequired,
  data: object,
  day: any,
  id: string,
  label: string,
  month: any.isRequired,
  required: bool,
  year: any.isRequired,
  yearEnd: number,
  yearStart: number
}

DatePickerInput.defaultProps = {
  required: true,
  yearEnd: 2019,
  yearStart: 1898
}
