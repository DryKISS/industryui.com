/**
 * Mobile
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaMobile = ({ verification }) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      />
      <meta name='mobile-web-app-capable' content='yes' />
    </Head>
  )
}

MetaMobile.propTypes = {
  verification: string.isRequired
}
