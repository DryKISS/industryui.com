/**
 * Components - Molecules - Navbar — Navbar
 */

// React
import React, { useState } from 'react'

// Style
import styled from 'styled-components'

// UI
import Brand from './components/brand'
import Contained from './components/contained'
import MEDIA_QUERY from '../../utils/mediaQuery/query'
import Toggler from './components/toggler'
import NavWidgets from './widgets/widgets'
import Overlay from './components/overlay'

// Props
import defaultProps from './components/props/defaultProps'
import propTypes from './components/props/propTypes'

const Navbar = ({ brand, contained, type, style, showMenu, widgets }) => {
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
        {contained ? (
          <Contained>
            <Content />
          </Contained>
        ) : (
          <Content />
        )}
      </StyledNav>

      <Overlay hidden={!visible} />
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

Navbar.propTypes = propTypes
Navbar.defaultProps = defaultProps

export default Navbar
