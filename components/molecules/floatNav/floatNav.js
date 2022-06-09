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
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'

const FloatNav = ({ context, data, Icon, menuLabel, menuContext, onSignIn, position }) => {
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
        <Wrapper>
          {!Icon ? <MenuBars size="lg" colour={context} /> : Icon}
          {menuLabel && (
            <Space marginLeft="md">
              <Text context={menuContext}>{menuLabel}</Text>
            </Space>
          )}
        </Wrapper>
      </Button>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
`
FloatNav.propTypes = {
  data: array.isRequired,
  Icon: func,
  onSignIn: func
}

export default FloatNav
