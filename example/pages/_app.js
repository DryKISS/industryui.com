/**
 * App
 */

// Next
import Head from 'next/head'

// UI
import { MyApp } from '@drykiss/industry-ui'
import Layout from '../layouts/index'
import { Config } from '../config/config'
import { Theme } from '../config/theme'

// UI
import '../config/icons'


const PageApp = (props) => {
  return (
    <>
      <Head>
        <meta
          content="https://drykiss.com/images/social/drykiss-facebook.jpg"
          key="og:image"
          property="og:image"
        />

        <meta
          name="twitter:image"
          content="https://drykiss.com/images/social/drykiss-facebook.jpg"
        />
      </Head>

      <MyApp config={Config} Layout={{}} pageProgressBar theme={Theme} {...props} />
    </>
  )
}

export default PageApp
