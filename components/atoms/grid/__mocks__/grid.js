/**
 * Components - Atoms - Grid - Mocks
 */

// React
import React from 'react'

// UI
import Column from '../Column'

export const colStyle = {
  border: '1px gray solid'
}

export const StyledColumn = (props) => (
  <Column {...props} style={colStyle}>
    {props.children}
  </Column>
)
