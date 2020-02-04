/**
 * Grid
 */
import React from 'react'
import { Column } from '../../../'

export const colStyle = {
  border: '1px gray solid'
}

export const StyledColumn = props => (
  <Column {...props} style={colStyle}>
    {props.children}
  </Column>
)
