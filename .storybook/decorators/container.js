/**
 * Container
 */

// React
import React from 'react'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import {
  ConfigProvider,
  InternationalisationProvider,
  OffCanvasProvider,
  Theme,
  UserProvider
} from '../../components'

import ThemeStyle from '../../components/theme/global/style'

// Config
import { Config } from '../../config'

export const Container = Story => {
  return (
    <ThemeProvider theme={Theme}>
      <ConfigProvider config={Config}>
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
