/**
 * Services - AppTheme - Provider
 */

// React
import React, { useMemo, useState } from 'react'
import { node, object } from 'prop-types'

// Lodash
import merge from 'lodash/merge'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import AppThemeContext from './context'
import Theme from '../../theme/theme'

const AppThemeProvider = ({ children, theme: initial }) => {
  const [theme, setTheme] = useState(initial)

  const mergedTheme = useMemo(() => {
    return merge(Theme, theme)
  }, [theme])

  return (
    <AppThemeContext.Provider value={{ setTheme, theme: mergedTheme }}>
      <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}

AppThemeProvider.propTypes = {
  children: node.isRequired,
  theme: object.isRequired
}

export default AppThemeProvider
