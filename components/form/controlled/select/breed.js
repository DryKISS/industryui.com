/**
 * Breed
 */

// React
import { func, string } from 'prop-types'

// UI
import { Select } from './'

// Data
import { DOG_BREED } from '../../../constants'

export const SelectDogBreed = ({ change, id, label, value }) => {
  return <Select change={change} id={id} label={label} options={DOG_BREED} required value={value} />
}

SelectDogBreed.propTypes = {
  change: func.isRequired,
  id: string,
  label: string,
  value: string
}
