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
  ThemeStyle,
  UserProvider
} from '../../components'

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
