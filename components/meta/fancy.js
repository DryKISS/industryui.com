/**
 * Fancy
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Next
import Head from 'next/head'

const MetaFancy = ({ category }) => {
  return (
    <Head>
      <meta property="fancy:category" content={category} />
    </Head>
  )
}

MetaFancy.propTypes = {
  category: string.isRequired
}

export default MetaFancy
