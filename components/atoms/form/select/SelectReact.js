/**
 * React Select
 * Utilises the select component
 *
 * @see https://github.com/JedWatson/react-select
 */

// React
import { array, func, string } from 'prop-types'

// UI
import Select from 'react-select'
import { Label } from '../../'

export const SelectReact = ({
  change,
  className,
  defaultValue,
  id,
  label,
  options,
  placeholder,
  selectedOption
}) => {
  const styles = {
    container: (base, state) => {
      return { ...base, margin: '0' }
    },

    control: (base, state) => {
      return { ...base, padding: '.315rem .75rem' }
    },

    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base
    },

    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
        : base
    },

    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: 'none' } : base
    }
  }

  return (
    <Label id={id} text={label}>
      <Select
        className={className}
        defaultValue={defaultValue}
        isMulti
        name={id}
        onChange={change}
        options={options}
        placeholder={placeholder}
        styles={styles}
        value={selectedOption}
      />
    </Label>
  )
}

SelectReact.propTypes = {
  change: func.isRequired,
  defaultValue: array,
  id: string,
  label: string,
  options: array.isRequired,
  placeholder: string,
  selectedOption: array.isRequired
}
