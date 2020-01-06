/**
 * App
 */

// React
import React from 'react'
import { any, bool, func, object } from 'prop-types'

// Lodash
import isObject from 'lodash/isObject'

// Next
import App from 'next/app'

// UI
import {
  FirebaseProvider,
  Icons,
  NotificationsProvider,
  OffCanvasProvider,
  Theme,
  ThemeStyle,
  UserProvider
} from '../'
import { jwtConfig } from 'config'

// Style
import { ThemeProvider } from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css'

export class MyApp extends App {
  static propTypes = {
    Component: func.isRequired,
    firebase: object,
    icons: object,
    Layout: any.isRequired,
    offCanvas: bool,
    pageProps: object,
    theme: object,
    user: bool
  }

  elements () {
    const { firebase, icons, offCanvas, user } = this.props
    const fire = isObject(firebase)

    return (
      <>
        {icons && <Icons icons={icons} />}
        <ThemeStyle />

        {fire && <FirebaseProvider config={firebase}>{this.layout()}</FirebaseProvider>}

        {user && offCanvas && (
          <UserProvider jwtConfig={jwtConfig}>
            <NotificationsProvider user={user}>
              <OffCanvasProvider>{this.layout()}</OffCanvasProvider>
            </NotificationsProvider>
          </UserProvider>
        )}

        {!user && !fire && this.layout()}
      </>
    )
  }

  layout () {
    const { Component, Layout, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }

  render () {
    const { theme } = this.props

    return (
      <ThemeProvider theme={Theme}>
        {theme ? <ThemeProvider theme={theme}>{this.elements()}</ThemeProvider> : this.elements()}
      </ThemeProvider>
    )
  }
}
