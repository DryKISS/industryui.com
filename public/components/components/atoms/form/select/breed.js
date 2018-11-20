/**
 * Breed
 */

// React
import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

// UI
import { Select } from '../'

// Data
import { DOG_BREEDS } from '../../../constants'

export const SelectBreed = class SelectBreed extends PureComponent {
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
        data={DOG_BREEDS}
        handleChange={handleChange}
        id={id}
        label={label}
        required
        value={value}
      />
    )
  }
}
