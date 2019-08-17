/**
 * App
 */

// React
import React from 'react'

// Next
import App, { Container } from 'next/app'
import Router from 'next/router'

// UI
import { GoogleAnalyticsPageView, Theme, ThemeStyle } from '../../'

// Layout
import Layout from 'layout'

// Style
import { ThemeProvider } from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css'

Router.events.on('routeChangeComplete', url => GoogleAnalyticsPageView(url, Google.analytics))

export class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>

        <ThemeProvider theme={Theme}>

          <Layout>
            <Component {...pageProps} />
          </Layout>

        </ThemeProvider>

        <ThemeStyle />

      </Container>
    )
  }
}
