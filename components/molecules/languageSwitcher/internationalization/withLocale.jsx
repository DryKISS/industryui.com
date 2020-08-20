import React from 'react'
import Error from 'next/error'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import { isLocale } from './service'
import { LocaleProvider } from './LocaleContext'

export default WrappedPage => {
  const WithLocale = ({ locale, ...pageProps }) => {
    console.log('locale is going to return 404', locale)

    if (!locale) {
      return <Error statusCode={404} />
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    console.log('doing the search')
    let pageProps = {}
    if (WrappedPage.getInitialProps) {
      console.log('doing the search2')

      pageProps = await WrappedPage.getInitialProps(ctx)
    }
    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      console.log('enter here ', ctx.query.lang)
      return { ...pageProps, locale: undefined }
    }
    return { ...pageProps, locale: ctx.query.lang }
  }

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`
  console.log('lolololo')

  return WithLocale
}
