/**
 * App
 */

// React
import React from 'react'
import { any, bool, func, object } from 'prop-types'

// Lodash
import isObject from 'lodash/isObject'

// Apollo
import { ApolloProvider } from '@apollo/react-hooks'

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

// Style
import { ThemeProvider } from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css'

export class MyApp extends App {
  static propTypes = {
    apolloClient: object,
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

        {user && (
          <UserProvider>
            <NotificationsProvider user={user}>
              {offCanvas ? <OffCanvasProvider>{this.layout()}</OffCanvasProvider> : this.layout()}
            </NotificationsProvider>
          </UserProvider>
        )}

        {!user && !fire && this.layout()}
      </>
    )
  }

  data () {
    const { apolloClient } = this.props

    return (
      <>
        {apolloClient ? (
          <ApolloProvider client={apolloClient}>{this.elements()}</ApolloProvider>
        ) : (
          this.elements()
        )}
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
        {theme ? <ThemeProvider theme={theme}>{this.data()}</ThemeProvider> : this.data()}
      </ThemeProvider>
    )
  }
}
