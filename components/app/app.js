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
    const { Component, icons, Layout, pageProps, user } = this.props

    return (
      <>
        {icons && <Icons icons={icons} />}
        <ThemeStyle />

        {user &&
          <UserProvider>
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
    const { authentication, firebase } = this.props

    return (
      <ThemeProvider theme={Theme}>
        {isObject(firebase)
          ? <FirebaseProvider config={firebase}>{this.layout()}</FirebaseProvider>
          : isObject(authentication)
            ? <AuthProvider config={authentication}>{this.layout()}</AuthProvider>
            : this.layout()}
      </ThemeProvider>
    )
  }
}
