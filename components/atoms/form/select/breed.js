/**
 * Breed
 */

// React
import { func, string } from 'prop-types'

// UI
import { Select } from '../'

// Data
import { DOG_BREEDS } from '../../../constants'

export const SelectBreed = ({ change, label, id, value }) => {
  return (
    <Select
      data={DOG_BREEDS}
      change={change}
      id={id}
      label={label}
      required
      value={value}
    />
  )
}

SelectBreed.propTypes = {
  change: func.isRequired,
  label: string,
  id: string,
  value: string
}
