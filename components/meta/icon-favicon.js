/**
 * Favicon
 *
 * @see https://stackoverflow.com/questions/48956465/favicon-standard-2018-svg-ico-png-and-dimensions
 * @see https://realfavicongenerator.net/
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaFavicon = ({ verification }) => {
  return (
    <Head>
      <link rel='icon' href='/favicon.ico' type='image/ico' />
    </Head>
  )
}

MetaFavicon.propTypes = {
  verification: string.isRequired
}
