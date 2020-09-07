/**
 * Container
 */

// UI
import {
  ConfigProvider,
  InternationalisationProvider,
  OffCanvasProvider,
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
            <OffCanvasProvider>
              <Story />
            </OffCanvasProvider>
          </InternationalisationProvider>
        </UserProvider>
      </ConfigProvider>
    </ThemeProvider>
  )
}
