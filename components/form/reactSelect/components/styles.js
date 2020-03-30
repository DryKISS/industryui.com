export const defaultStyles = {
  container: (base, state) => {
    return { ...base, margin: '0' }
  },

  control: (base, state) => {
    return {
      ...base,
      backgroundColor: '#fff',
      border: '1px solid #c4cacf',
      borderRadius: '0.25rem',
      color: '#003753',
      fontSize: '1rem',
      height: '3rem',
      lineHeight: 1.5,
      padding: '0'
    }
  },

  menu: (base, state) => {
    return {
      ...base,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      color: '#003753'
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
  },

  placeholder: (base, state) => {
    return {
      color: '#003753'
    }
  },

  singleValue: (base, state) => {
    return {
      ...base,
      color: '#003753'
    }
  }
}
