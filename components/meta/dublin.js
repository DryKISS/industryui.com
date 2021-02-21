/**
 * Dublin
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaDublin = ({ author, description, locale, title }) => {
  return (
    <Head>
      <meta name="dcterms.title" content={title} />
      <meta name="dcterms.description" content={description} />
      <meta name="dcterms.publisher" content={author} />
      <meta name="dcterms.language" content={locale} />
      <meta name="dcterms.creator" content={author} />
    </Head>
  )
}

MetaDublin.propTypes = {
  author: string.isRequired,
  description: string.isRequired,
  locale: string.isRequired,
  title: string.isRequired
}
