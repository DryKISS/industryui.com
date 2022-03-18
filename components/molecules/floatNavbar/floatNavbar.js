/**
 * Components - Molecules - FloatNavbar — FloatNavbar
 */

// React
import React, { useState } from 'react'

// Style
import styled from 'styled-components'

// UI

import MEDIA_QUERY from '../../utils/mediaQuery/query'

// Props
import defaultProps from './components/props/defaultProps'
import propTypes from './components/props/propTypes'

const FloatNavbar = ({ brand, contained, type, style, showMenu, widgets }) => {
  // const [visible, setVisible] = useState(showMenu)

  const handleClick = () => {
    // setVisible(!visible)
  }

  const Content = () => {
    return <>TEst testets</>
  }

  return (
    <>
      {/* <StyledNav style={style}>
        {contained ? (
          <Contained>
            <Content />
          </Contained>
        ) : (
          <Content />
        )}
      </StyledNav>

      <Overlay hidden={!visible} /> */}
      tertst
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

FloatNavbar.propTypes = propTypes
FloatNavbar.defaultProps = defaultProps

export default FloatNavbar
