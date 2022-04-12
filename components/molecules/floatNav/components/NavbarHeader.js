/**
 * Components - Molecules - Components - NavbarHeader
 */

// React
import React from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'

// UI
import Button from '../../../atoms/button/button/button'
import Close from '../../../icons/components/close'
import MenuItems from './MenuItems'

const NavbarHeader = ({ onSignIn, setShowMenu }) => (
  <Wrapper>
    <Button context="transparent" content={null} onClick={() => setShowMenu(false)}>
      <Close colour="white" size="lg" />
    </Button>
    <Button context="transparent" onClick={onSignIn} size="lg">
      <b>Sing in</b>
    </Button>
  </Wrapper>
)

const Wrapper = styled.div`
  margin-top: 30px;
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`

NavbarHeader.propTypes = {
  onSignIn: func.isRequired,
  setShowMenu: func.isRequired
}

export default NavbarHeader
