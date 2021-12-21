/**
 * Components - Layouts - Grid
 */

// React
import React from 'react'
import { node } from 'prop-types'

// UI
import LayoutGridWrapper from './components/wrapper'

const LayoutGrid = ({ children }) => {
  return <LayoutGridWrapper>{children}</LayoutGridWrapper>
}

LayoutGrid.propTypes = {
  children: node.isRequired
}

LayoutGrid.defaultProps = {}

export default LayoutGrid
