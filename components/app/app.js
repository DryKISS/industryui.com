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
  AuthProvider,
  FirebaseProvider,
  Icons,
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
    authentication: any,
    Component: func.isRequired,
    firebase: object,
    icons: object,
    Layout: any,
    pageProps: object,
    user: bool
  }

  layout () {
    const { Component, Layout, pageProps, user } = this.props

    return (
      <>
        {user &&
          <UserProvider jwtConfig={jwtConfig}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserProvider>}

        {!user &&
          <Layout>
            <Component {...pageProps} />
          </Layout>}
      </>
    )
  }

  render () {
    const { authentication, firebase, icons } = this.props

    return (
      <ThemeProvider theme={Theme}>
        {icons && <Icons icons={icons} />}
        <ThemeStyle />

        {isObject(firebase)
          ? <FirebaseProvider config={firebase}>{this.layout()}</FirebaseProvider>
          : isObject(authentication)
            ? <AuthProvider config={authentication}>{this.layout()}</AuthProvider>
            : this.layout()}
      </ThemeProvider>
    )
  }
}
