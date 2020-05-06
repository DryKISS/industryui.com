/**
 * Navbar — Widgets — Link
 */

// React
import { bool, string, func } from 'prop-types'

// UI
import { Link, MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const NavLink = ({ active, closeMenu, id, name, onClick, to, type, visible }) => {
  const handleClick = () => {
    visible && closeMenu()
    onClick && onClick()
  }

  if (type && (!active || active !== type)) {
    return
  }

  return (
    <Link border={false} onClick={handleClick} passHref to={to}>
      <StyledLink id={id}>{name}</StyledLink>
    </Link>
  )
}

const StyledLink = styled.span`
  align-items: center;
  color: ${({ theme }) =>
    theme.NAVBAR.colourDefault ? theme.NAVBAR.colourDefault : theme.NAVBAR.colourActive};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => (theme.NAVBAR.paddingLink ? theme.NAVBAR.paddingLink : '1rem 0.75rem')};
  &:hover {
    color: ${({ theme }) =>
      theme.NAVBAR.colourHover ? theme.NAVBAR.colourHover : theme.NAVBAR.colourActive};
  }
  ${MEDIA_QUERY.desktop`
    color: ${({ theme }) =>
      theme.NAVBAR.colourDefaultDesktop
        ? theme.NAVBAR.colourDefaultDesktop
        : theme.NAVBAR.colourActive};
    &:hover {
      color: ${({ theme }) =>
        theme.NAVBAR.colourHoverDesktop
          ? theme.NAVBAR.colourHoverDesktop
          : theme.NAVBAR.colourActive};
    }
  `}
`

NavLink.propTypes = {
  active: string,
  closeMenu: func,
  id: string.isRequired,
  name: string.isRequired,
  onClick: func,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
}

NavLink.defaultProps = {
  visible: false
}
