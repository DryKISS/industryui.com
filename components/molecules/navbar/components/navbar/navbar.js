/**
 * Navbar - Navbar
 */

// React
import React, { useState } from 'react'
import { bool, object, objectOf, oneOfType, number, string } from 'prop-types'

// UI
import { Brand, Contained, Toggler, Widgets } from '../internal'
import { MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const Navbar = ({ brand, contained, type, style, widgets }) => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  const Content = () => {
    return (
      <>
        {brand && <Brand brand={brand} />}

        <Toggler handleMenuClick={handleClick} visible={visible} />

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
  border-top: 0.25rem solid ${({ theme }) => theme.COLOUR.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  position: relative;
  z-index: 200;
  ${MEDIA_QUERY.desktop`
    flex-flow: row nowrap;
    height: ${({ theme }) => theme.NAVBAR.height};
    justify-content: flex-start;
    padding: 0 3rem;
  `}
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
  contained: bool,
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
