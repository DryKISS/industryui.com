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

import { Config } from '../../config'

// Style
import { ThemeProvider } from 'styled-components'

export const Container = Story => {
  return (
    <ThemeProvider theme={Theme}>
      <ConfigProvider config={Config}>
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
