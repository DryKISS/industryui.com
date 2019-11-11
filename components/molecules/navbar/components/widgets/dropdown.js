/**
 * Navbar - User
 */

// React
import { object, string } from 'prop-types'

// UI
import { Icon } from '../../../../'
import { Dropdown } from '../../../dropdown'

// Style
import styled from 'styled-components'

export const NavDropdown = ({ name, type }) => {
  return (
    <StyledUser>
      <StyledDropdown items={type.items}>
        <Icon aria-hidden='true' context='info' icon='user' />
        <StyledContent>{name}</StyledContent>
      </StyledDropdown>
    </StyledUser>
  )
}

const StyledUser = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  padding: 1rem 0.75rem;
  position: relative;
  user-select: none;
  width: 100%;
`

const StyledDropdown = styled(Dropdown)`
  flex: 1;
  position: initial;

  .dropdown--toggle {
    &:hover {
      color: ${({ theme }) => theme.COLOUR.primary};
    }
  }

  .dropdown--menu {
    background-color: rgb(37, 51, 66);
    border: initial;
    border-radius: 0;
    left: -0.75rem;
    min-width: 11rem;
    top: 3.7rem;
  }

  .dropdown--link {
    color: #fff;
    padding: 0.5rem;
    text-shadow: 0 0 1px transparent;
    vertical-align: baseline;

    &:hover {
      background-color: #33475b;
    }
  }
`

const StyledContent = styled.span`
  margin: 0 0.25rem;
`

NavDropdown.propTypes = {
  name: string.isRequired,
  type: object.isRequired
}
