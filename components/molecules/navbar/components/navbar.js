/**
 * Navbar
 */

// React
import { useState } from 'react'
import { bool, object, objectOf, oneOfType, number, string } from 'prop-types'

// UI
import { Brand, Links, Notifications, Toggler, User } from './'
import { Container, MEDIA_QUERY } from '../../../'

// Style
import styled from 'styled-components'

export const Navbar = ({ brand, container, links, type, notifications, user, style }) => {
  const [visible, setVisible] = useState(false)

  const handleMenuClick = () => {
    setVisible(!visible)
  }

  const Contained = () => {
    return (
      <StyledContainer>
        <Widgets />
      </StyledContainer>
    )
  }

  const Widgets = () => {
    return (
      <>
        {brand && <Brand brand={brand} />}

        <Toggler handleMenuClick={handleMenuClick} visible={visible} />

        {links && (
          <Links
            brand={brand}
            closeMenu={handleMenuClick}
            links={links}
            type={type}
            visible={visible}
          />
        )}

        {notifications && <Notifications {...notifications} />}

        {user && <User {...user} />}
      </>
    )
  }

  return (
    <>
      <StyledNav style={style}>{container ? <Contained /> : <Widgets />}</StyledNav>

      <StyledOverlay hidden={!visible} />
    </>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  background-color: ${props => props.theme.NAVBAR.background};
  border-bottom: 1px solid #eef1f4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  position: relative;
  z-index: 200;

  ${MEDIA_QUERY.desktop`
    flex-flow: row nowrap;
    height: ${props => props.theme.NAVBAR.height};
    justify-content: flex-start;
    padding: 0 3rem;
  `}
`

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const StyledOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  bottom: 0;
  cursor: pointer;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition-property: width;
  transition-duration: 0.2s;
  width: 100%;
  z-index: 99;

  ${MEDIA_QUERY.desktop`
    display: none;
  `}
`

Navbar.propTypes = {
  brand: string,
  container: bool,
  links: object,
  notifications: object,
  user: object,
  style: objectOf(oneOfType([number, string])),
  type: string
}

Navbar.defaultProps = {
  brand: '',
  links: {}
}
