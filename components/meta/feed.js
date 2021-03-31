/**
 * Feed
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

const MetaFeed = ({ title }) => {
  return (
    <Head>
      <link rel="alternate" type="application/atom+xml" href="feed.xml" title={title} />
      <link rel="alternate" type="application/rss+xml" href="feed.xml" title={title} />
    </Head>
  )
}

MetaFeed.propTypes = {
  title: string.isRequired
}

export default MetaFeed
