/**
 * Touch
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

const MetaTouch = ({ verification }) => {
  return (
    <Head>
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (orientation: portrait)"
        href="/assets/images/site/logo/splash-screen.jpg"
      />
      <link
        rel="apple-touch-icon"
        media="(device-width: 768px) and (orientation: portrait)"
        href="/assets/images/site/touch/icon-72@2x.png"
        sizes="144x144"
      />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="../img/libs/touch/apple-touch-icon-144x144-precomposed.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="../img/libs/touch/apple-touch-icon-114x114-precomposed.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="../img/libs/touch/apple-touch-icon-72x72-precomposed.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="../img/libs/touch/apple-touch-icon-57x57-precomposed.png"
      />
      <link rel="shortcut icon" href="../img/libs/touch/apple-touch-icon.png" />

      <meta
        name="msapplication-TileImage"
        content="../img/libs/touch/apple-touch-icon-144x144-precomposed.png"
      />
      <meta name="msapplication-TileColor" content="#222222" />

      <link rel="icon" href="images/touch/chrome-touch-icon-192x192.png" sizes="192x192" />
    </Head>
  )
}

MetaTouch.propTypes = {
  verification: string.isRequired
}

export default MetaTouch
