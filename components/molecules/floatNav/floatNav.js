/**
 * Components - Molecules - Float Navbar
 */

// React
import React, { useState } from 'react'
import { array, func } from 'prop-types'

// Style
import styled from 'styled-components'
import MenuBars from '../../icons/components/menuBars'

// UI
import Button from '../../atoms/button/button/button'
import MainMenu from './components/MainMenu'

const FloatNav = ({ data, Icon, onSignIn }) => {
  const [isShowMenu, setShowMenu] = useState(false)

  return (
    <>
      <MainMenu data={data} isShowMenu={isShowMenu} onSignIn={onSignIn} setShowMenu={setShowMenu} />
      <Button context="transparent" onClick={() => setShowMenu(!isShowMenu)}>
        {!Icon ? <MenuBars size="lg" /> : Icon}
      </Button>
    </>
  )
}

FloatNav.propTypes = {
  data: array.isRequired,
  Icon: func,
  onSignIn: func
}

export default FloatNav
