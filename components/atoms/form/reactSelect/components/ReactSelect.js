/**
 * React Select
 * Utilises the select component
 *
 * @see https://github.com/JedWatson/react-select
 */

// React
import { array, func, string, oneOfType, object } from 'prop-types'

// UI
import Select from 'react-select'
import { Label } from '../../'

export const ReactSelect = ({
  change,
  className,
  defaultValue,
  id,
  isMulti,
  label,
  options,
  placeholder,
  selectedOption,
  ...props
}) => {
  const styles = {
    container: (base, state) => {
      return { ...base, margin: '0' }
    },

    control: (base, state) => {
      return {
        ...base,
        padding: '.315rem .75rem',
        backgroundColor: '#fff',
        border: '1px solid #c4cacf',
        borderRadius: '0.25rem',
        color: '#9da7af',
        fontSize: '1rem',
        height: '3rem',
        lineHeight: 1.5
      }
    },

    menu: (base, state) => {
      return {
        ...base,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
        color: '#9da7af'
      }
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

  const handleChange = option => {
    change({
      target: {
        checked: false,
        id,
        type: 'select',
        value: option,
        label: option ? option.label : ''
      }
    })
  }

  return (
    <Label id={id} text={label}>
      <Select
        className={className}
        defaultValue={defaultValue}
        isMulti={isMulti}
        name={id}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        styles={styles}
        value={selectedOption}
        {...props}
      />
    </Label>
  )
}

ReactSelect.propTypes = {
  change: func.isRequired,
  defaultValue: oneOfType([array, object]),
  id: string,
  label: string,
  options: array.isRequired,
  placeholder: string,
  selectedOption: oneOfType([array, object])
}
