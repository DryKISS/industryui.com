/**
 * Components - Molecules - Components - Navbar
 */

// React
import styled from 'styled-components'

// UI
import MenuItems from './MenuItems'

const Navbar = ({ data }) => (
  <NavbarWrapper>
    {data.map((menu, index) => {
      const depthLevel = 0
      return <MenuItems depthLevel={depthLevel} items={menu} key={index} />
    })}
  </NavbarWrapper>
)

const NavbarWrapper = styled.ul`
  margin-top: 80px;
  display: flex;
  list-style: none;
  z-index: 100;
  position: absolute;
`
export default Navbar
