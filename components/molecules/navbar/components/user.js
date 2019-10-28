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
      <Dropdown caret items={items} position='right'>
        <Icon aria-hidden='true' context='info' icon='user' />
        {name}
      </Dropdown>
    </StyledUser>
  )
}

const StyledUser = styled.div`
  display: inline-block;
  margin: auto 0.75rem;
  position: relative;
  user-select: none;
`

User.propTypes = {
  items: array.isRequired,
  name: string.isRequired
}
