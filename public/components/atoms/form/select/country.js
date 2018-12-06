/**
 * Country
 */

// React
import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

// UI
import { Select } from '../'

// Data
import { COUNTRY } from '../../../constants'

export const SelectCountry = class SelectCountry extends PureComponent {
  static propTypes = {
    handleChange: func.isRequired,
    label: string,
    id: string,
    value: string
  }

  render () {
    const {
      handleChange,
      label,
      id,
      value
    } = this.props

    return (
      <Select
        data={COUNTRY}
        handleChange={handleChange}
        id={id}
        label={label}
        value={value}
      />
    )
  }
}
