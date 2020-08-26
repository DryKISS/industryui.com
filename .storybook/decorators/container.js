/**
 * Container
 */

// UI
import { ConfigProvider, Theme, ThemeStyle, UserProvider } from 'components'

// Style
import { ThemeProvider } from 'styled-components'

export const Container = Story => {
  return (
    <ThemeProvider theme={Theme}>
      <ConfigProvider>
        <ThemeStyle />
        <UserProvider>
          <div>
            <Story />
          </div>
        </UserProvider>
      </ConfigProvider>
    </ThemeProvider>
  )
}
