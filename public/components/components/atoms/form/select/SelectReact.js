/**
 * React Select
 * Utilises the select component p
 *
 * @see https://github.com/JedWatson/react-select
 */

// React
import React, { Component } from 'react'
import Select from 'react-select'
import { array, func, string } from 'prop-types'

// UI
import { Label } from '../../'

// Style
import { withTheme } from 'styled-components'

export const SelectReact = withTheme(
  class SelectReact extends Component {
    static propTypes = {
      defaultValue: array,
      handleChange: func.isRequired,
      id: string,
      label: string,
      options: array.isRequired,
      placeholder: string,
      selectedOption: array.isRequired
    }

    render () {
      const {
        defaultValue,
        handleChange,
        id,
        label,
        options,
        placeholder,
        selectedOption
      } = this.props

      return (
        <Label id={id} text={label}>

          <Select
            defaultValue={defaultValue}
            isMulti
            name={id}
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            styles={styles}
            value={selectedOption}
          />

        </Label>
      )
    }
  }
)

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
    return state.data.isFixed ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 } : base
  },

  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base
  }
}
