/**
 * Layout
 */

// React
import { node } from 'prop-types'

// UI

// Components
import { LayoutFooter, LayoutHeader } from '.'

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired
}
