/**
 * App
 *
 * @todo This is doing too much Apollo provider and GTM should be abstracted as options and the providers sorted out
 */

// React
import React from 'react'
import { any, bool, func, object } from 'prop-types'

// Lodash
import merge from 'lodash/merge'

// Apollo
import { ApolloProvider } from '@apollo/client'

// Next
import App from 'next/app'

// Google Tag Manager
import TagManager from 'react-gtm-module'

// UI
import { AuthorizationProvider } from '../services/authorization/provider'
import {
  ConfigProvider,
  InternationalisationProvider,
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
    config: object,
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
    theme: {},
    user: false
  }

  componentDidMount () {
    const { google } = this.props
    if (google) {
      TagManager.initialize({ gtmId: google.analytics })
    }
  }

  elements () {
    const { offCanvas, user } = this.props

    return (
      <>
        <ThemeStyle />
        {user && (
          <UserProvider>
            <AuthorizationProvider>
              <InternationalisationProvider>
                <NotificationsProvider>
                  {offCanvas ? (
                    <OffCanvasProvider>{this.layout()}</OffCanvasProvider>
                  ) : (
                    this.layout()
                  )}
                </NotificationsProvider>
              </InternationalisationProvider>
            </AuthorizationProvider>
          </UserProvider>
        )}

        {!user && this.layout()}
      </>
    )
  }

  data () {
    const { apolloClient, config } = this.props

    return (
      <>
        <ConfigProvider config={config}>
          {apolloClient ? (
            <ApolloProvider client={apolloClient}>{this.elements()}</ApolloProvider>
          ) : (
            this.elements()
          )}
        </ConfigProvider>
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
