/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import { array, func, node, string } from 'prop-types'

// UI
import { Copyright, Footer } from '../../'

export const Bootstrap = ({ brand, children, copyright, footer, Navigation }) => {
  return (
    <>
      <Navigation />

      {children}

      {footer && <Footer columns={footer} />}

      <Copyright brand={brand} links={copyright} />
    </>
  )
}

Bootstrap.propTypes = {
  brand: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  navigation: func
}
