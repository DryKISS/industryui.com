/**
 * Head
 */

// React
import { object, string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaHead = ({ brand, meta, url }) =>
  <Head>

    <title>{meta.title} | {brand}</title>

    <meta name='description' content={meta.description} key='description' />
    <meta rel='canonical' href={`${url}/${meta.canonical}`} key='canonical' />

    <meta property='og:title' content={meta.title} />
    <meta property='og:description' content={meta.description} />
    <meta property='og:url' content={meta.canonical} />

    <meta name='twitter:url' content={meta.canonical} />
    <meta name='twitter:title' content={meta.title} />
    <meta name='twitter:description' content={meta.description} />

  </Head>

MetaHead.propTypes = {
  brand: string.isRequired,
  meta: object.isRequired,
  url: string.isRequired
}

MetaHead.defaultProps = {
  url: 'https://www.tailwise.com'
}
