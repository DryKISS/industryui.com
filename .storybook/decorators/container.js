/**
 * Container
 */

// UI
import {
  ConfigProvider,
  InternationalisationProvider,
  Theme,
  ThemeStyle,
  UserProvider
} from 'components'

// Style
import { ThemeProvider } from 'styled-components'

export const Container = Story => {
  return (
    <ThemeProvider theme={Theme}>
      <ConfigProvider>
        <ThemeStyle />
        <UserProvider>
          <InternationalisationProvider locale='en'>
            <div>
              <Story />
            </div>
          </InternationalisationProvider>
        </UserProvider>
      </ConfigProvider>
    </ThemeProvider>
  )
}
