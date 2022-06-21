/**
 * Components - Molecules - Components - MainMenu
 */

// React
import React, { useState } from 'react'
import { array, bool, func } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import Close from '../../../icons/components/close'
import Container from '../../../atoms/grid/Container'
import Heading from '../../../atoms/heading/heading'
import MenuBars from '../../../icons/components/menuBars'
import Navbar from './Navbar'
import NavbarHeader from './NavbarHeader'

const MainMenu = ({ data, isShowMenu, onSignIn, position, setShowMenu }) => {
  return (
    <MainWrapper isShowMenu={isShowMenu} position={position}>
      <ContainerWrapper>
        <NavbarHeader setShowMenu={setShowMenu} onSignIn={onSignIn} />
        <HeadingWrapper content="Menu" tag="h1" />
        <Navbar data={data} setShowMenu={setShowMenu} />
      </ContainerWrapper>
    </MainWrapper>
  )
}

const ContainerWrapper = styled(Container)`
  margin: 0px auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    width: 100%;
    overflow-y: scroll;
  }
`

const MainWrapper = styled.div`
  ${({ isShowMenu }) =>
    isShowMenu
      ? css`
          visibility: visible;
          opacity: 1;
          transition: visibility 0s linear 0s, opacity 500ms;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 500ms, opacity 500ms;
        `}

  width: 100%;
  height: 100vh !important;
  background: rgba(0, 0, 0, 0.9);
  position: ${({ position }) => position};
  top: 0px;
  left: 0px;
  height: 0px;
  z-index: 100;
`

const HeadingWrapper = styled(Heading)`
  text-align: center;
  margin-top: 0px;
  color: ${({ theme }) => theme.COLOUR.white};

  @media (max-width: 768px) {
    margin-left: -114px;
  }
`

MainMenu.propTypes = {
  data: array.isRequired,
  isShowMenu: bool.isRequired,
  onSignIn: func,
  setShowMenu: func.isRequired
}

export default MainMenu
