/**
 * Components - Form - React Select - Default Styles
 */

// Polished
import { transparentize } from 'polished'

// UI
import THEME_COLOUR from '../../../constants/colour'

const defaultStyles = {
  container: (base, state) => {
    return {
      ...base,
      boxShadow: state.isFocused ? '0 0 0 0.25rem rgb(13 110 253 / 25%)' : 'none',
      borderRadius: '0.25rem',
      margin: 0
    }
  },

  control: (base) => {
    return {
      ...base,
      backgroundColor: '#fff',
      borderColor: THEME_COLOUR.light,
      borderRadius: '0.25rem',
      color: THEME_COLOUR.dark,
      height: '3rem',
      lineHeight: 1.5,
      padding: 0,
      boxShadow: 'none'
    }
  },

  menu: (base) => {
    return {
      ...base,
      borderColor: THEME_COLOUR.light,
      color: THEME_COLOUR.dark
    }
  },

  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: 'grey' } : base
  },

  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
      : base
  },

  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base
  },

  placeholder: (base) => {
    return {
      ...base,
      color: transparentize(0.5, THEME_COLOUR.dark)
    }
  },

  singleValue: (base) => {
    return {
      ...base,
      color: THEME_COLOUR.dark
    }
  }
}

export default defaultStyles
