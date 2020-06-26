/**
 * App
 */

// React
import React from 'react'
import { any, bool, func, object } from 'prop-types'

// Lodash
import isObject from 'lodash/isObject'
import merge from 'lodash/merge'

// Apollo
import { ApolloProvider } from '@apollo/client'

// Next
import App from 'next/app'

// Google Tag Manager
import TagManager from 'react-gtm-module'

// UI
import {
  AuthorizationProvider,
  FirebaseProvider,
  // Icons,
  NotificationsProvider,
  OffCanvasProvider,
  PageProgressBar,
  Theme,
  ThemeStyle,
  UserProvider
} from '../'

// Style
import { ThemeProvider } from 'styled-components'

export class MyApp extends App {
  static propTypes = {
    apolloClient: object,
    Component: func.isRequired,
    firebase: object,
    google: object,
    icons: object,
    Layout: any.isRequired,
    offCanvas: bool,
    pageProps: object,
    pageProgressBar: bool,
    theme: object,
    user: bool
  }

  static defaultProps = {
    offCanvas: false,
    pageProgressBar: false,
    theme: [],
    user: false
  }

  componentDidMount () {
    const { google } = this.props
    if (google) {
      TagManager.initialize({ gtmId: google.analytics })
    }
  }

  elements () {
    const { firebase, offCanvas, user } = this.props
    const fire = isObject(firebase)

    return (
      <>
        {/* {icons && <Icons icons={icons} />} */}
        <ThemeStyle />

        {fire && <FirebaseProvider config={firebase}>{this.layout()}</FirebaseProvider>}

        {user && (
          <UserProvider>
            <AuthorizationProvider>
              <NotificationsProvider>
                {offCanvas ? <OffCanvasProvider>{this.layout()}</OffCanvasProvider> : this.layout()}
              </NotificationsProvider>
            </AuthorizationProvider>
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
    const { Component, Layout, pageProps, pageProgressBar, router } = this.props

    return (
      <Layout>
        {pageProgressBar && <PageProgressBar router={router} />}
        <Component {...pageProps} />
      </Layout>
    )
  }

  render () {
    return <ThemeProvider theme={merge(Theme, this.props.theme)}>{this.data()}</ThemeProvider>
  }
}

// import App, { Container } from 'next/app'
// import React from 'react'
// import './app.css'
// import TagManager from 'react-gtm'

// const tagManagerArgs = {
//   id: 'GTM-XXXXXXX'
// }

// class MyApp extends App {
//   componentDidMount () {
//     TagManager.initialize(tagManagerArgs)
//   }

//   render () {
//     const { Component, pageProps } = this.props
//     return (
//       <Container>
//         <Component {...pageProps} />
//       </Container>
//     )
//   }
// }
