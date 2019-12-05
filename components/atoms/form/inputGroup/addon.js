/**
 * Input Group Addon
 * Allows the element to be positioned
 */

// React
import { node, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

export const InputGroupAddon = ({ addonType, children }) => {
  return <StyledInputGroupAddon className={addonType} addonType={addonType} children={children} />
}

const StyledInputGroupAddon = styled.div`
  display: flex;
  align-items: center;
  margin-left: -1px;

  & > * {
    height: 100%;
  }
`

InputGroupAddon.propTypes = {
  addonType: oneOf(['prepend', 'append']),
  children: node
}

InputGroupAddon.defaultProps = {
  addonType: 'append',
  size: 'md'
}
