/**
 * Layout
 */

// React
import { node } from 'prop-types'

// Next
import Head from 'next/head'

// UI
import { Bootstrap } from '@drykiss/industry-ui'

// Config
import { Brand } from '../config/config'
import { Copyright } from '../config/copyright'

const Layout = ({ children }) => {
  return (
    <Bootstrap brand={Brand.name} brandLogo={Brand.logo} children={children} copyright={Copyright}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>

      {children}
    </Bootstrap>
  )
}

Layout.propTypes = {
  children: node.isRequired
}

export default Layout
