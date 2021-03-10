/**
 * Twitter
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaTwitter = ({ account, description, image, title, url }) => {
  return (
    <Head>
      <meta name="twitter:site" content={account} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={account} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta content={url} property="twitter:domain" />
      {/* <meta name="twitter:url" content="https://.app/">
      <meta name="twitter:image:alt" content="Happy beagle puppy with its new owner"> */}{' '}
      */}
    </Head>
  )
}

MetaTwitter.propTypes = {
  account: string.isRequired,
}
