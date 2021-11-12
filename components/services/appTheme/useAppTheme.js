/**
 * Services - AppTheme - useAppTheme
 */

// React
import { useContext } from 'react'

// UI
import AppThemeContext from './context'

const useAppTheme = () => {
  const appTheme = useContext(AppThemeContext)

  if (!appTheme) {
    throw new Error('useAppTheme must be used within the AppThemeProvider')
  }

  return appTheme
}

export default useAppTheme
