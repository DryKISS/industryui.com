/**
 * Input Group Addon
 * Allows the element to be positioned
 */

// React
import { node, oneOf } from 'prop-types'

// UI
import { InputGroupText } from '../../'

// Style
import styled from 'styled-components'

export const InputGroupAddon = ({ addonType, children }) => {
  // Convenience to assist with transition
  // if (typeof children === 'string') {
  return (
    <StyledInputGroupAddon addonType={addonType}>
      <InputGroupText children={children} />
    </StyledInputGroupAddon>
  )
  // }

  // return (
  //   <StyledInputGroupAddon addonType={addonType} children={children} />
  // )
}

InputGroupAddon.propTypes = {
  addonType: oneOf(['prepend', 'append']),
  children: node
}

InputGroupAddon.defaultProps = {
  addonType: 'prepend',
  size: 'md'
}

const StyledInputGroupAddon = styled.div`
  display: flex;
  margin-right: -1px;
`
