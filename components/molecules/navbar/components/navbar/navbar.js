/**
 * Navbar — Navbar
 */

// React
import { useState } from 'react'
import { bool, object, objectOf, oneOfType, number, string } from 'prop-types'

// UI
import { Brand, Contained, MEDIA_QUERY, Toggler, Widgets } from '../../../../'

// Style
import styled from 'styled-components'

export const Navbar = ({
  animational,
  brand,
  contained,
  custom,
  type,
  style,
  showMenu,
  widgets
}) => {
  const [visible, setVisible] = useState(showMenu)

  const handleClick = () => {
    setVisible(!visible)
  }

  const Content = () => {
    return (
      <>
        {brand && <Brand animational={animational} brand={brand} />}

        <Toggler custom={custom} handleMenuClick={handleClick} visible={visible} />

        {widgets && (
          <Widgets
            brand={brand}
            closeMenu={handleClick}
            type={type}
            visible={visible}
            widgets={widgets}
          />
        )}
      </>
    )
  }

  return (
    <>
      <StyledNav style={style}>
        {contained ? <Contained content={Content} /> : <Content />}
      </StyledNav>

      <StyledOverlay hidden={!visible} />
    </>
  )
}

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.NAVBAR.background};
  border-top-width: ${({ theme }) => theme.NAVBAR.borderTopWidth};
  border-top-style: ${({ theme }) => theme.NAVBAR.borderTopStyle};
  border-top-color: ${({ theme }) => theme.NAVBAR.borderTopColor};
  display: flex;
  flex-wrap: wrap;
  height: ${({ theme }) => theme.NAVBAR.height};
  justify-content: space-between;
  padding: ${({ theme }) => theme.NAVBAR.padding};
  position: relative;
  z-index: 200;
  ${MEDIA_QUERY.tablet`
    padding: ${({ theme }) => theme.NAVBAR.paddingTablet};
  `}
  ${MEDIA_QUERY.desktop`
    padding: ${({ theme }) => theme.NAVBAR.paddingDesktop};
  `}
`

const StyledOverlay = styled.div`
  background: ${({ theme }) => theme.NAVBAR.backgroundOverlay};
  bottom: 0;
  cursor: pointer;
  height: ${({ theme }) => theme.NAVBAR.heightOverlay};
  position: ${({ theme }) => theme.NAVBAR.positionOverlay};
  right: 0;
  top: 0;
  transition-property: width;
  transition-duration: 0.2s;
  width: ${({ theme }) => theme.NAVBAR.widthOverlay};
  z-index: 199;
  ${MEDIA_QUERY.desktop`
    display: none;
  `}
`

Navbar.propTypes = {
  animational: bool,
  brand: string,
  contained: bool,
  custom: bool,
  showMenu: bool,
  style: objectOf(oneOfType([number, string])),
  type: string,
  widgets: object
}

Navbar.defaultProps = {
  animational: false,
  brand: '',
  contained: false,
  custom: false,
  showMenu: false
}
