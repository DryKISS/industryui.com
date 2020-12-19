/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import { array, bool, func, node, object } from 'prop-types'

// UI
import { Copyright, Footer } from '../../'

export const Bootstrap = ({ children, copyright, footer, fixed, icon, Navigation }) => {
  return (
    <>
      <Navigation />

      {children}

      {footer && <Footer columns={footer} fixed={fixed} />}

      {copyright && <Copyright icon={icon} links={copyright} />}
    </>
  )
}

Bootstrap.propTypes = {
  children: node.isRequired,
  copyright: array,
  fixed: bool,
  footer: array,
  icon: object,
  navigation: func
}

Bootstrap.defaultProps = {
  fixed: false
}
