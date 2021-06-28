/**
 * Favicon
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

const MetaFavicon = ({ verification }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" type="image/ico" />
    </Head>
  )
}

MetaFavicon.propTypes = {
  verification: string.isRequired
}

export default MetaFavicon
