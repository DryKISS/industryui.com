/**
 * App - Layout
 */

// React
import React from 'react'
import { any, bool, func, object } from 'prop-types'

// Next
import dynamic from 'next/dynamic'

// UI
const PageProgressBar = dynamic(() => import('../molecules/pageProgressBar/pageProgressBar'))

const AppLayout = ({ Component, Layout, pageProgressBar, pageProps, router }) => {
  return (
    <Layout>
      {pageProgressBar && <PageProgressBar router={router} />}
      <Component {...pageProps} />
    </Layout>
  )
}

AppLayout.propTypes = {
  Component: func.isRequired,
  Layout: any.isRequired,
  pagePrgressBar: bool,
  pageProps: object.isRequired
}

export default AppLayout
