/**
 * Date Picker
 */

// React
import { any, bool, func, number, string } from 'prop-types'

// UI
import { Column, Row, Select } from '../../'

// Data
import { DAYS, MONTHS } from './constants/dates'

// Style
import styled from 'styled-components'

export const DatePicker = ({
  change,
  day,
  id,
  label,
  month,
  required,
  year,
  yearEnd,
  yearStart
}) => {
  const StyledLabelText = styled.div`
    margin-bottom: .5rem;
  `

  const years = () => {
    const years = [{ disabled: true, text: 'Select year', value: '' }]

    for (let y = yearEnd; y >= yearStart; y--) {
      years.push({ text: y, value: y })
    }

    return (
      <Select
        data={years}
        change={change}
        id={`year${id}`}
        required={required}
        value={year}
      />
    )
  }

  return (
    <>
      <StyledLabelText>{label}</StyledLabelText>

      <Row>

        {day !== false &&
          <Column md={4}>
            <Select
              data={DAYS}
              change={change}
              id={`day${id}`}
              required={required}
              value={day}
            />
          </Column>
        }

        <Column md={4}>
          <Select
            data={MONTHS}
            change={change}
            id={`month${id}`}
            required={required}
            value={month}
          />
        </Column>

        <Column md={4}>{years()}</Column>

      </Row>
    </>
  )
}

DatePicker.propTypes = {
  change: func.isRequired,
  day: any,
  id: string,
  label: string,
  month: any.isRequired,
  required: bool,
  year: any.isRequired,
  yearEnd: number,
  yearStart: number
}

DatePicker.defaultProps = {
  required: true,
  yearEnd: 2019,
  yearStart: 1898
}
