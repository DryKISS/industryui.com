/**
 * Navbar user
 */

// React
import { array, string } from 'prop-types'

// UI
import { Dropdown, Icon } from '../../../'

// Style
import styled from 'styled-components'

export const User = ({ items, name }) => {

  return (
    <StyledUser>
      <Dropdown items={items} position='right' caret><Icon aria-hidden="true" context="info" icon='user' /> {name}</Dropdown>
    </StyledUser>
  )

}

const StyledUser = styled.div`
  display: inline-block;
  position: relative;
`

User.propTypes = {
  items: array.isRequired,
  name: string.isRequired
}
