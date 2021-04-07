/**
 * Container
 */

// React
import React from 'react'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import ConfigProvider from '../../components/services/config/provider'
import InternationalisationProvider from '../../components/services/internationalisation/provider'
import OffCanvasProvider from '../../components/services/offCanvas/provider'
import Theme from '../../components/theme/theme'
import UserProvider from '../../components/services/authentication/provider'
import ThemeStyle from '../../components/theme/global/style'

// Config
import { Config } from '../../config/config'

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
