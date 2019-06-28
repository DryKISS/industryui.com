/**
 * Navbar
 */

// React
import { useState } from 'react'
import { any, object, string } from 'prop-types'

// UI
import { Brand, Links, Toggler } from './components'
import { MEDIA_QUERY } from '../../../utils'

// Style
import styled from 'styled-components'

export const Navbar = ({ brand, links, type }) => {
  const [visible, setVisible] = useState(false)

  const handleMenuClick = () => {
    setVisible(!visible)
  }

  return (
    <>
      <StyledNav>

        {brand && <Brand brand={brand} />}

        <Toggler handleMenuClick={handleMenuClick} visible={visible} />

        {links && <Links links={links} type={type} visible={visible} />}

      </StyledNav>

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

const StyledOverlay = styled.div`
  background-color: rgba(255, 255, 255, .85);
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
`

Navbar.propTypes = {
  authUser: any,
  brand: string,
  links: object,
  type: string
}

Navbar.defaultProps = {
  brand: '',
  links: {}
}
