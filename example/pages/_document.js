/**
 * Document
 */

// Next
import Document, { Head, Html, Main, NextScript } from 'next/document'

// Style
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html className="no-js" lang="en" dir="ltr" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta charSet="utf-8" />
        </Head>

        <body
          data-locale="en"
          data-localeFacebook="en_GB"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
