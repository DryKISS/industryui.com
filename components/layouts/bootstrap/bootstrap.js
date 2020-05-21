/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import React from 'react'
import { array, bool, func, node, object, string } from 'prop-types'

// UI
import { Copyright, Footer } from '../../'

export const Bootstrap = ({ brand, children, copyright, footer, fixed, icon, Navigation }) => {
  return (
    <>
      <Navigation />

      {children}

      {footer && <Footer columns={footer} fixed={fixed} />}

      <Copyright brand={brand} icon={icon} links={copyright} />
    </>
  )
}

Bootstrap.propTypes = {
  brand: string,
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
