/**
 * Components - Layouts - LayoutGrid
 */

// React
import React from 'react'
import { node } from 'prop-types'

// UI
import { LayoutGridWrapper } from './wrapper'

export const LayoutGrid = ({ children }) => {
  return <LayoutGridWrapper>{children}</LayoutGridWrapper>
}

LayoutGrid.propTypes = {
  children: node.isRequired,
}

LayoutGrid.defaultProps = {}
