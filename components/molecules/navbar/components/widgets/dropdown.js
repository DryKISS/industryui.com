/**
 * Navbar - Widgets - Dropdown
 */

// React
import { object, string } from 'prop-types'

// UI
import { Icon, MEDIA_QUERY } from '../../../../'
import { Dropdown } from '../../../dropdown'

// Style
import styled from 'styled-components'

export const NavDropdown = ({ icon, name, position, prefix, type }) => {
  return (
    <StyledContainer>
      <StyledDropdown items={type.items} position={position}>
        {icon && <Icon aria-hidden='true' icon={icon} prefix={prefix} />}
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
    background-color: rgb(37, 51, 66);

    .dropdown--caret {
      color: ${({ theme }) => theme.COLOUR.primary};
    }
  }

  .dropdown--toggle {
    display: block;
    line-height: 60px;
    padding: 0 0.5rem;

    &:hover .dropdown--caret {
      color: ${({ theme }) => theme.COLOUR.primary};
    }
  }

  .dropdown--menu {
    background-color: rgb(37, 51, 66);
    border: initial;
    border-radius: 0;
    margin: 0;
    padding: 0;
    position: initial;
    top: 3.7rem;
    width: 100%;
    ${MEDIA_QUERY.desktop`
      min-width: 11rem;
      position: absolute;
    `}
  }

  .dropdown--link {
    color: #fff;
    padding: 0.75rem;
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
  icon: string,
  name: string.isRequired,
  position: string,
  prefix: string,
  type: object.isRequired
}

NavDropdown.defaultProps = {
  position: 'left',
  prefix: 'fad'
}
