/**
 * Input Group Addon
 * Allows the element to be positioned
 */

// React
import { node, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

export const InputGroupAddon = ({ addonType, children }) => {
  return (
    <StyledInputGroupAddon
      addonType={addonType}
      children={children}
    />
  )
}

const StyledInputGroupAddon = styled.div`
  display: flex;
  margin-left: -1px;
`

InputGroupAddon.propTypes = {
  addonType: oneOf(['prepend', 'append']),
  children: node
}

InputGroupAddon.defaultProps = {
  addonType: 'append',
  size: 'md'
}
