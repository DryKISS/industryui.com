/**
 * Container
 */

// UI
import { Theme, ThemeStyle } from 'root'

// Style
import { ThemeProvider } from 'styled-components'

export const Container = story => {
  return (
    <ThemeProvider theme={Theme}>
      <div>{story()}</div>
      <ThemeStyle />
    </ThemeProvider>
  )
}
