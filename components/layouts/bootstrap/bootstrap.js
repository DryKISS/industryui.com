/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import React from 'react'
import { array, func, node, object, string } from 'prop-types'

// UI
import { Copyright, Footer } from '../../'

export const Bootstrap = ({ brand, children, copyright, footer, icon, Navigation }) => {
  return (
    <>
      <Navigation />

      {children}

      {footer && <Footer columns={footer} />}

      <Copyright brand={brand} icon={icon} links={copyright} />
    </>
  )
}

Bootstrap.propTypes = {
  brand: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  icon: object,
  navigation: func
}
