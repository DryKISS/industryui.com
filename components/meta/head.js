/**
 * Head
 */

// React
import { object, string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaHead = ({ brand, meta }) => {
  const { canonical = '', description, title } = meta

  return (
    <Head>

      <title>{title} | {brand}</title>

      <meta name='description' content={description} key='description' />
      <meta rel='canonical' href={canonical} key='canonical' />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonical} />

      <meta name='twitter:url' content={canonical} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

    </Head>
  )
}

MetaHead.propTypes = {
  brand: string.isRequired,
  meta: object.isRequired
}
