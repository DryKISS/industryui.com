/**
 * Components - Molecules - Float Navbar
 */

// React
import React, { useState } from 'react'
// Style
import styled from 'styled-components'
import arrowDown from '../../icons/components/arrowDown'
import Close from '../../icons/components/close'
import MenuBars from '../../icons/components/menuBars'
// Helper
import generateMenu from './helpers/generateMenu'

const FloatNav = ({ data, icon }) => {
  const [isShowMenu, setShowMenu] = useState(false)
  return (
    <Wrapper arrowDown={arrowDown}>
      <MainMenu data={data} isShowMenu={isShowMenu} setShowMenu={setShowMenu} />

      <button onClick={() => setShowMenu(!isShowMenu)}>
        <MenuBars size="lg" />
      </button>
    </Wrapper>
  )
}

const MainMenu = ({ data, isShowMenu, setShowMenu }) => {
  let Data = () => []
  if (isShowMenu) {
    Data = () => console.log('Data :>> ', Data)
  }

  return (
    <MainWrapper className="mainMenu" isShowMenu={isShowMenu}>
      <div className="header-box">
        <button className="btn-close" onClick={() => setShowMenu(false)}>
          <Close size="lg" colour="white" />
        </button>
        <button className="singIn">Sing in</button>
      </div>
      <h3>Website Menu</h3>

      {/* {isShowMenu && generateMenu(data, arrowDown)} */}
      {isShowMenu && generateMenu(data, arrowDown)}
    </MainWrapper>
  )
}
const Wrapper = styled.div`
  .expand {
    display: block !important;
  }

  .main {
    margin-top: 100px;

    ul {
      display: none;
    }
  }
  .submenu {
    background: url('/menu/vector.svg') no-repeat right center;
  }
  h3 {
    text-align: center;
    margin-top: 45px;
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
  }
`
const MainWrapper = styled.div`
  display: ${({ isShowMenu }) => (isShowMenu ? 'block' : 'none')};
  width: 100%;
  height: 100vh !important;
  background-color: #000000;
  opacity: 0.6;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 0px;
  z-index: 100;
  overflow: hidden;
  .active {
    color: red;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-position: under;
  }
  li {
    color: #ffffff;
    font-weight: bold;
    &:hover {
      color: red;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-position: under;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      &:hover {
        color: red;
      }
    }
  }
  ul {
    list-style: none;
  }
  li {
    width: 180px;
    text-align: center;
    cursor: pointer;
  }
  > ul {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 110px;
    display: flex;

    > li {
      & > ul {
        width: 100%;
        position: absolute;
        top: 200px;
        left: 45px;
        > li {
          position: absolute;

          & > ul {
            position: absolute;
            top: 100px;
            left: -360px;
            width: 100vw;
            li {
              position: absolute;
            }
          }
        }
      }
    }
  }
  .header-box {
    margin-top: 30px;
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    button {
      background: none;
      border: none;
      display: block;
      cursor: pointer;
    }
    .btn-close {
      width: 60px;
      height: 60px;
    }
    .singIn {
      display: block;
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
    }
  }
`

export default FloatNav
