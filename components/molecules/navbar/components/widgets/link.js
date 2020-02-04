/**
 * Navbar - Widgets
 */

// React
import { bool, string, func } from 'prop-types'

// UI
import { Link } from '../../../../'

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
  color: ${({ theme }) => theme.NAVBAR.colourActive};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1rem 0.75rem;

  &:hover {
    color: ${({ theme }) => theme.NAVBAR.colourActive};
  }
`

NavLink.propTypes = {
  closeMenu: func,
  id: string,
  name: string,
  to: string,
  type: string,
  visible: bool
}
