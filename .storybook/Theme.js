/**
 * Theme
 */

// Style
import { ThemeProvider } from 'styled-components'

// UI
import { Theme } from '../components'

export const ThemeWrapper = ({ story }) => {
  return (
    <ThemeProvider theme={Theme}>{story()}</ThemeProvider>
  )
}
