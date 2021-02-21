/**
 * Apple
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

export const MetaApple = ({ appleId, title }) => {
  return (
    <Head>
      <meta charset="apple-itunes-app" content={appleId} />
      <meta charset="apple-mobile-web-app-capable" content="yes" />
      <meta
        charset="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta charset="apple-mobile-web-app-title" content={title} />
      <meta charset="format-detection" content="telephone=yes" />
    </Head>
  )
}

MetaApple.propTypes = {
  appleId: string.isRequired,
  title: string.isRequired
}
