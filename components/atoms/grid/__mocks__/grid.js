/**
 * Components - Atoms - Grid - Mocks
 */

// React
import React from 'react'

// UI
import Column from '../Column'

const colStyle = {
  border: '1px gray solid'
}

const StyledColumn = (props) => (
  <Column {...props} style={colStyle}>
    {props.children}
  </Column>
)

export default StyledColumn
