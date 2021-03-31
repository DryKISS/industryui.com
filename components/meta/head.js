/**
 * Head
 */

// React
import React from 'react'
import { object, string } from 'prop-types'

// Next
import Head from 'next/head'

const MetaHead = ({ canonical, brand, meta }) => {
  const { description, path, title } = meta

  return (
    <Head>
      <title>
        {title} | {brand}
      </title>

      <meta name="description" content={description} key="description" />
      <meta rel="canonical" href={canonical + path} key="canonical" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical + path} />

      <meta name="twitter:url" content={canonical + path} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

MetaHead.propTypes = {
  brand: string.isRequired,
  meta: object.isRequired
}

export default MetaHead
