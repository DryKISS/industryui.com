/**
 * Date Picker
 */

// React
import React, { Component, Fragment } from 'react'
import { any, bool, func, number, string } from 'prop-types'

// UI
import { Column, Row, Select } from '../../'

// Data
import { DAYS, MONTHS } from './constants/dates'

// Style
import { withTheme } from 'styled-components'

export const DatePicker = withTheme(
  class DatePicker extends Component {
    static propTypes = {
      day: any,
      handleChange: func.isRequired,
      id: string,
      label: string,
      month: any.isRequired,
      required: bool,
      year: any.isRequired,
      yearEnd: number,
      yearStart: number
    }

    static defaultProps = {
      required: true,
      yearEnd: 2018,
      yearStart: 1898
    }

    years = () => {
      const { handleChange, id, required, year, yearEnd, yearStart } = this.props

      const years = [
        { disabled: true, text: 'Select year', value: '' }
      ]

      for (let y = yearEnd; y >= yearStart; y--) {
        years.push({ text: y, value: y })
      }

      return (
        <Select
          data={years}
          handleChange={handleChange}
          id={`year${id}`}
          required={required}
          value={year}
        />
      )
    }

    render () {
      const {
        day,
        handleChange,
        id,
        label,
        month,
        required
      } = this.props

      return (
        <Fragment>

          {label}

          <Row>

            {/* Day */}
            {day !== false &&
              <Column md={4}>
                <Select
                  data={DAYS}
                  handleChange={handleChange}
                  id={`day${id}`}
                  required={required}
                  value={day}
                />
              </Column>
            }

            {/* Month */}
            <Column md={4}>
              <Select
                data={MONTHS}
                handleChange={handleChange}
                id={`month${id}`}
                required={required}
                value={month}
              />
            </Column>

            {/* Year */}
            <Column md={4}>
              {this.years()}
            </Column>

          </Row>

        </Fragment>
      )
    }
  }
)
