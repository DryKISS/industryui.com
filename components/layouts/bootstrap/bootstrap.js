/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import React from 'react'
import { array, bool, func, node, object } from 'prop-types'

// UI
import { Copyright } from '../../molecules/copyright/copyright'
import { Footer } from '../../organisms/footer/footer'

export const Bootstrap = ({
  children,
  copyright,
  footer,
  fixed,
  icon,
  Navigation
}) => {
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
  Navigation: func
}

Bootstrap.defaultProps = {
  fixed: false
}
