/**
 * Google
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

const MetaGoogle = ({ verification }) => {
  return (
    <Head>
      <meta name="google-site-verification" content={verification} />
    </Head>
  )
}

MetaGoogle.propTypes = {
  verification: string.isRequired
}

export default MetaGoogle
