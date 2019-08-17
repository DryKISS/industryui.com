/**
 * Theme
 */

// Style
import { ThemeProvider } from 'styled-components'

// UI
import { Theme, ThemeStyle } from '../'

export const ThemeWrapper = ({ story }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>{story()}</ThemeProvider>
      <ThemeStyle />
    </>
  )
}
