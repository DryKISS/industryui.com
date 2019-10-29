/**
 * Breed
 */

// React
import { func, string } from 'prop-types'

// UI
import { Select } from '../'

// Data
import { DOG_BREED } from '../../../constants'

export const SelectBreed = ({ change, label, id, value }) => {
  return <Select change={change} id={id} label={label} options={DOG_BREED} required value={value} />
}

SelectBreed.propTypes = {
  change: func.isRequired,
  label: string,
  id: string,
  value: string
}
