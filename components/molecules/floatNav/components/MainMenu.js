/**
 * Components - Molecules - Components - MainMenu
 */

// React
import React, { useState } from 'react'
import { array, bool, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Close from '../../../icons/components/close'
import Container from '../../../atoms/grid/Container'
import Heading from '../../../atoms/heading/heading'
import MenuBars from '../../../icons/components/menuBars'
import Navbar from './Navbar'
import NavbarHeader from './NavbarHeader'

const MainMenu = ({ data, isShowMenu, onSignIn, setShowMenu }) => (
  <MainWrapper isShowMenu={isShowMenu}>
    <Container>
      <NavbarHeader setShowMenu={setShowMenu} onSignIn={onSignIn} />
      <HeadingWrapper content="Website Menu" tag="h1" />
      <Navbar data={data} />
    </Container>
  </MainWrapper>
)

const HeadingWrapper = styled(Heading)`
  text-align: center;
  margin-top: 65px;
  color: #ffffff;
`

const MainWrapper = styled.div`
  display: ${({ isShowMenu }) => (isShowMenu ? 'block' : 'none')};
  width: 100%;
  height: 100vh !important;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0px;
  left: 0px;
  height: 0px;
  z-index: 100;
`

MainMenu.propTypes = {
  data: array.isRequired,
  isShowMenu: bool.isRequired,
  onSignIn: func.isRequired,
  setShowMenu: func.isRequired
}

export default MainMenu
