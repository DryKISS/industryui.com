/**
 * Components - Molecules - Navbar — Navbar
 */

// React
import React, { useState } from 'react'
import { bool, object, objectOf, oneOfType, number, string } from 'prop-types'

// UI
import { Brand, Contained, MEDIA_QUERY, Toggler } from '../../../'
import { NavWidgets } from '../components/widgets/widgets'

// Style
import styled from 'styled-components'

export const Navbar = ({ brand, contained, type, style, showMenu, widgets }) => {
  const [visible, setVisible] = useState(showMenu)

  const handleClick = () => {
    setVisible(!visible)
  }

  const Content = () => {
    return (
      <>
        {brand && <Brand brand={brand} />}

        <Toggler handleMenuClick={handleClick} visible={visible} />

        {widgets && (
          <NavWidgets
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
  border-bottom: ${({ theme }) => theme.NAVBAR.borderBottom};
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

  ${({ theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
      display: none;
    `}
`

Navbar.propTypes = {
  brand: string,
  contained: bool,
  showMenu: bool,
  style: objectOf(oneOfType([number, string])),
  type: string,
  widgets: object
}

Navbar.defaultProps = {
  brand: '',
  contained: false,
  showMenu: false
}
