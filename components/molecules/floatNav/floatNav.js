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

const FloatNav = ({ context, data, Icon, onSignIn, position }) => {
  const [isShowMenu, setShowMenu] = useState(false)

  return (
    <>
      <MainMenu
        position={position}
        data={data}
        isShowMenu={isShowMenu}
        onSignIn={onSignIn}
        setShowMenu={setShowMenu}
      />
      <Button context="transparent" onClick={() => setShowMenu(!isShowMenu)}>
        {!Icon ? <MenuBars size="lg" colour={context} /> : Icon}
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
