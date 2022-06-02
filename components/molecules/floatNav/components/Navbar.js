/**
 * Components - Molecules - Components - Navbar
 */

// React
import React from 'react'
import styled from 'styled-components'

// UI
import MenuItems from './MenuItems'

const Navbar = ({ data, setShowMenu }) => (
  <NavbarWrapper>
    {data.map((menu, index) => {
      const depthLevel = 0
      return (
        <MenuItems depthLevel={depthLevel} items={menu} key={index} setShowMenu={setShowMenu} />
      )
    })}
  </NavbarWrapper>
)

const NavbarWrapper = styled.ul`
  margin-top: 80px;
  display: flex;
  list-style: none;
  z-index: 100;
  position: absolute;
  top: 130px;

  @media (max-width: 768px) {
    display: block;
    position: static;
    margin-top: 10px;
  }
`
export default Navbar
