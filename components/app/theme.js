/**
 * App - Theme
 */

// React
import React from 'react'
import { node, object } from 'prop-types'

// Lodash
import merge from 'lodash/merge'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import Theme from '../theme/theme'

const AppTheme = ({ children, theme }) => {
  return <ThemeProvider theme={merge(Theme, theme)}>{children}</ThemeProvider>
}

AppTheme.propTypes = {
  children: node.isRequired,
  theme: object
}

AppTheme.defaultProps = {
  theme: {}
}

export default AppTheme
