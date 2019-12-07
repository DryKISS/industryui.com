/**
 * Container
 */

// UI
import { Theme, ThemeStyle, UserProvider } from 'components'

// Style
import { ThemeProvider } from 'styled-components'

export const Container = story => {
  return (
    <ThemeProvider theme={Theme}>
      <ThemeStyle />
      <UserProvider>
        <div>{story()}</div>
      </UserProvider>
    </ThemeProvider>
  )
}
