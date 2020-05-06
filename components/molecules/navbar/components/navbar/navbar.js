/**
 * Navbar — Navbar
 */

// React
import React, { useState } from 'react'
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 200;
  background-color: ${({ theme }) =>
    theme.NAVBAR.background ? theme.NAVBAR.background : theme.COLOUR.dark};
  border-top-width: ${({ theme }) =>
    theme.NAVBAR.borderTopWidth ? theme.NAVBAR.borderTopWidth : '0.25rem'};
  border-top-style: ${({ theme }) =>
    theme.NAVBAR.borderTopStyle ? theme.NAVBAR.borderTopStyle : 'solid'};
  border-top-color: ${({ theme }) =>
    theme.NAVBAR.borderTopColor ? theme.NAVBAR.borderTopColor : theme.COLOUR.primary};
  height: ${({ theme }) => (theme.NAVBAR.height ? theme.NAVBAR.height : '4rem')};
  padding: ${({ theme }) => (theme.NAVBAR.padding ? theme.NAVBAR.padding : '0 1rem')};
  ${MEDIA_QUERY.tablet`
    padding: ${({ theme }) => (theme.NAVBAR.paddingTablet ? theme.NAVBAR.paddingTablet : '0 1rem')};
  `}
  ${MEDIA_QUERY.desktop`
    padding: ${({ theme }) =>
      theme.NAVBAR.paddingDesktop ? theme.NAVBAR.paddingDesktop : '0 3rem'};
  `}
`

const StyledOverlay = styled.div`
  background: ${({ theme }) =>
    theme.NAVBAR.backgroundOverlay ? theme.NAVBAR.backgroundOverlay : theme.COLOUR.dark};
  bottom: 0;
  cursor: pointer;
  height: ${({ theme }) => (theme.NAVBAR.heightOverlay ? theme.NAVBAR.heightOverlay : '100%')};
  position: ${({ theme }) =>
    theme.NAVBAR.positionOverlay ? theme.NAVBAR.positionOverlay : 'fixed'};
  right: 0;
  top: 0;
  transition-property: width;
  transition-duration: 0.2s;
  width: ${({ theme }) => (theme.NAVBAR.widthOverlay ? theme.NAVBAR.widthOverlay : '100%')};
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
