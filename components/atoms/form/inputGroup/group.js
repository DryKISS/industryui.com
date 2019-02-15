/**
 * Input Group
 * Wraps the Input so we can append or prepend another element
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const InputGroup = ({ children, size }) => {
  return (
    <StyledInputGroup children={children} size={size} />
  )
}

InputGroup.propTypes = {
  size: string
}

InputGroup.defaultProps = {
  size: 'md'
}

const StyledInputGroup = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`
