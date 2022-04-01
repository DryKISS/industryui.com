/**
 * Components - Molecules - Float Navbar
 */

// React
import React, { useState } from 'react'
// Style
import styled from 'styled-components'

const FloatNav = ({ data }) => {
  const [isShowMenu, setShowMenu] = useState(false)
  return (
    <Wrapper>
      <MainMenu data={data} isShowMenu={isShowMenu} />
      <button onClick={() => setShowMenu(!isShowMenu)}>Icon</button>
    </Wrapper>
  )
}
var indent = 3

function generateMenu(container, menu) {
  if (!menu || !menu.length) return
  const ul = document.createElement('ul')
  let counter = -1
  for (const { title, submenus, href, main } of menu) {
    counter += 1
    const li = document.createElement('li')
    li.textContent = title
    li.className = main ? 'leaf main' : 'leaf'
    li.style.left = `${counter * 10}%`

    if (href !== '#') {
      const a = document.createElement('a')
      a.href = href
      li.textContent = ''
      li.appendChild(a)
      a.textContent = title
    }

    if (submenus) {
      li.className = li.className + ' submenu'
      generateMenu(li, submenus, true)
      li.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return

        for (let i = 0; i < e.target.children.length; i++) {
          if (e.currentTarget.className.lastIndexOf('main') !== -1) {
            // remove all main true
            const mainChild = document.querySelector('.mainMenu').children

            for (let item = 0; item < mainChild[0].children.length; item++) {
              mainChild[0].children[item].children[0].classList.remove('expand')
            }
          }
          e.target.children[i].classList.toggle('expand')
        }
      })
    }
    ul.appendChild(li)
  }
  container.appendChild(ul)
}

const MainMenu = ({ data, isShowMenu }) => {
  if (isShowMenu) generateMenu(document.querySelector('.mainMenu'), data)

  return <MainWrapper className="mainMenu" isShowMenu={isShowMenu} />
}
const Wrapper = styled.div`
  .expand {
    display: block !important;
  }

  .main {
    ul {
      display: none;
    }
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

  li {
    color: #ffffff;
    font-weight: bold;
    &:hover {
      color: red;
      text-decoration: underline;
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
  }
  > ul {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;

    > li {
      & > ul {
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0px;
        > li {
          position: absolute;

          & > ul {
            position: absolute;
            top: 100px;
            left: -360px;
            width: 100vw;
            li {
              position: absolute;
              left: 210%;
            }
          }
        }
      }
    }
  }
`

export default FloatNav
