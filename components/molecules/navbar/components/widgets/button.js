/**
 * Navbar - Widgets
 */

// React
import { bool, string, func } from 'prop-types'

// UI
import { Button, Link, MEDIA_QUERY_MAX } from '../../../../'

// Style
import styled from 'styled-components'

export const NavButton = ({ closeMenu, id, name, to, type, visible }) => {
  return (
    <Link to={to} passHref>
      <StyledButton
        id={id}
        context={type.context}
        content={name}
        onClick={visible ? closeMenu : () => {}}
        outline={type.outline}
        size={type.size}
        type={type.as}
      />
    </Link>
  )
}

const StyledButton = styled(Button)`
  ${MEDIA_QUERY_MAX.desktop`
    background: none;
    border: none;
    color: ${({ theme }) => theme.NAVBAR.colourActive};
    cursor: pointer;
    font-size: 0.8125rem;
    padding: 1rem 0.75rem;
    width: 100%;

    &:hover {
      color: ${({ theme }) => theme.COLOUR.primary};
      background: none;
    }
  `}
`

NavButton.propTypes = {
  closeMenu: func,
  id: string,
  name: string,
  to: string,
  type: string,
  visible: bool
}
