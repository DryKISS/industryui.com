/**
 * Navbar notifications
 */

// React
import { number, object } from 'prop-types'

// UI
import { Link, Icon } from '../../../'

// Style
import styled from 'styled-components'

export const Notifications = ({ count, link }) => {

  if (link && link.to) {
    return (
      <Link to={link.to} passHref>
        <a>
          <StyledNotifications>
            { count && <StyledCount>{count}</StyledCount>}
            <Icon icon='bell' />
          </StyledNotifications>
        </a>
      </Link>
    )
  } else {
    return (
      <StyledNotifications>
        { count && <StyledCount>{count}</StyledCount>}
        <Icon icon='bell' />
      </StyledNotifications>
    )
  }

}

const StyledNotifications = styled.div`
  display: inline-block;
  margin: auto 1rem auto .75rem;
  position: relative;
`

const StyledCount = styled.div`
  background: red;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 11px;
  left: 100%;
  line-height: 1;
  margin-left: -10px;
  padding: 2px 5px;
  position: absolute;
  text-align: center;
  top: -8px;
  user-select: none;
`

Notifications.propTypes = {
  count: number,
  link: object
}
