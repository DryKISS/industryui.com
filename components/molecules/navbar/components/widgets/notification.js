/**
 * Navbar - Notifications
 */

// React
import { number, object } from 'prop-types'

// UI
import { Link, Icon } from '../../../../'

// Style
import styled from 'styled-components'

export const NavNotification = ({ closeMenu, to, type, visible }) => {
  const handleClick = () => {
    visible && closeMenu()
  }

  const link = () => (
    <Link to={to} passHref>
      <a onClick={handleClick}>
        <Notification />
      </a>
    </Link>
  )

  const Notification = () => (
    <StyledNotifications>
      {type && !!type.count && <StyledCount>{type.count}</StyledCount>}
      <Icon icon='bell' prefix='fad' />
    </StyledNotifications>
  )

  if (to) {
    return link()
  } else {
    return <Notification />
  }
}

const StyledNotifications = styled.div`
  color: ${({ theme }) => theme.NAVBAR.colourActive};
  display: inline-block;
  margin-right: 0.5rem;
  padding: 1rem 0.75rem;
  position: relative;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.NAVBAR.colourActive};
  }
`

const StyledCount = styled.div`
  background: red;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.75rem;
  left: 50%;
  line-height: 1;
  padding: 2px 5px;
  position: absolute;
  text-align: center;
  top: 0.4rem;
  user-select: none;
`

NavNotification.propTypes = {
  count: number,
  link: object
}
