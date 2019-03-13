/**
 * List Item
 */
import { bool, node } from 'prop-types'

// Style
import styled from 'styled-components'

export const ListItem = ({ children, inline }) => {
  return (
    <StyledLi inline={inline}>
      {children}
    </StyledLi>
  )
}

const StyledLi = styled.li`
  &:not(:last-child) {
    /* margin-right: 3rem; */
  }
`

// @media (min-width: ${configuration.breakpoints.sm}px) {
//   .List-itemInline:not(:last-child) {
//     margin-right: 3rem;
//   }
// }

ListItem.propTypes = {
  children: node.isRequired,
  inline: bool
}

ListItem.defaultProps = {
  inline: false
}
