/**
 * Facebook
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaFacebook = ({ appId, brand, description, image, locale, title, type, url }) => {
  return (
    <Head>
      <meta content={title} property="og:title" />
      <meta content={description} name="description" property="og:description" />
      <meta content={`${url}${image}`} property="og:image" />

      {/* <meta property="og:image:secure_url" content="https://www..com/img/social.jpg" />
      <meta property="og:image:width" content="1200">
      <meta property="og:image:height" content="630"> */}

      <meta content={brand} property="og:site_name" />
      <meta content={type} property="og:type" />
      <meta content={url} property="og:url" />
      <meta content={locale} property="og:locale" />
      <meta content={appId} property="fb:app_id" />
    </Head>
  )
}

MetaFacebook.propTypes = {
  appId: string.isRequired,
  description: string.isRequired,
  locale: string.isRequired,
  title: string.isRequired,
}
