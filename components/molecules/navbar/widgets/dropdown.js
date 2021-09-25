/**
 * Navbar - Widgets - Dropdown
 */

// React
import React from 'react'
import { func, object, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import MEDIA_QUERY from '../../../utils/mediaQuery/query'
import Dropdown from '../../../molecules/dropdown/dropdown'

const NavDropdown = ({ closeMenu, icon, name, position, prefix, type }) => {
  return (
    <StyledContainer>
      <StyledDropdown items={type.items} onChange={closeMenu} position={position}>
        {icon && <Icon aria-hidden="true" icon={icon} prefix={prefix} />}
        <StyledContent>{name}</StyledContent>
      </StyledDropdown>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  position: relative;
  user-select: none;
  width: 100%;
`

const StyledDropdown = styled(Dropdown)`
  flex: 1;
  position: initial;

  .dropdown--active {
    background-color: ${({ theme }) => theme.NAVBAR.dropdownActive};

    .dropdown--caret {
      color: ${({ theme }) => theme.NAVBAR.caretColour};
    }
  }

  .dropdown--toggle {
    display: block;
    line-height: 60px;
    padding: 0 0.5rem;

    &:hover .dropdown--caret {
      color: ${({ theme }) => theme.NAVBAR.caretColourHover};
    }
  }

  .dropdown--menu {
    background-color: ${({ theme }) => theme.NAVBAR.dropdownBackground};
    border: initial;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
    padding: 0;
    position: initial;
    top: calc(4rem - 6px);
    width: 100%;

    ${MEDIA_QUERY.desktop`
      min-width: 11rem;
      position: absolute;
    `}
  }

  .dropdown--link {
    color: ${({ theme }) => theme.NAVBAR.dropdownColour};
    padding: 0.75rem;
    text-shadow: 0 0 1px transparent;
    vertical-align: baseline;

    &:hover {
      color: ${({ theme }) => theme.NAVBAR.dropdownColourHover};
      background-color: ${({ theme }) => theme.NAVBAR.dropdownBackgroundHover};
    }
  }
`

const StyledContent = styled.span`
  margin: 0 0.25rem;
`

NavDropdown.propTypes = {
  closeMenu: func,
  icon: string,
  name: string.isRequired,
  position: string,
  prefix: string,
  type: object.isRequired
}

NavDropdown.defaultProps = {
  position: 'left',
  prefix: 'fas'
}

export default NavDropdown
