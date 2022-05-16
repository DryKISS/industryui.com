/**
 * Components - Molecules - Components - MenuDropdown
 */

// React
import React, { useEffect, useState, useRef } from 'react'
import { array, bool, number } from 'prop-types'

// UI
import MenuItems from './MenuItems'
import Button from '../../../atoms/button/button/button'
// Style
import styled, { css } from 'styled-components'

const MenuDropdown = ({ dropdown, depthLevel, submenus }) => {
  depthLevel = depthLevel + 1
  // TODO: Find a ways to handle it without adding classes
  const [scroll, setScroll] = useState(0)
  const ref = useRef(null)
  const [width, setWidth] = useState(ref?.current && ref?.current?.scrollWidth)

  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''

  useEffect(() => {
    if (scroll > 0) {
      ref.current.scrollLeft = scroll
    }

    if (scroll < 100) {
      ref.current.scrollLeft = 0
    }

    if (scroll > Math.abs(ref?.current?.offsetWidth - 450)) {
      setScroll(ref?.current?.offsetWidth - 450)
    }
  }, [scroll])

  useEffect(() => {
    setWidth(ref.current?.scrollWidth)
  }, [dropdown])

  return (
    <DropdownWrapper
      className={`${dropdownClass} ${dropdown ? 'show' : ''}`}
      isDropdown={depthLevel > 1}
    >
      <Wrapper isDropdown={depthLevel > 1}>
        {scroll >= 100 && <Arrow onClick={() => setScroll(scroll - 100)} />}
        <Content ref={ref}>
          {submenus.map((submenu, index) => (
            <MenuItems depthLevel={depthLevel} items={submenu} key={index} />
          ))}
        </Content>
        {width > ref?.current?.offsetWidth && (
          <Arrow right onClick={() => setScroll(scroll + 100)} />
        )}
      </Wrapper>
    </DropdownWrapper>
  )
}

const Arrow = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;

  &:after {
    content: '';
    position: relative;
    top: -4px;
    color: #ffffff;
    left: 4px;
    border: solid;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    cursor: pointer;
    ${({ right }) =>
      right &&
      css`
        transform: rotate(315deg) !important;
        -webkit-transform: rotate(315deg) !important;
      `}
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 1200px;
  display: flex;

  @media (max-width: 1700px) {
    width: 1000px;
  }

  @media (max-width: 1280px) {
    width: 880px;
  }

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`
const Content = styled.div`
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  padding-left: 10px;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    overflow-x: initial;
    overflow-y: scroll;
  }
`
const DropdownWrapper = styled.ul`
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 0.875rem;
  z-index: 9999;
  padding: 0.5rem 0;
  list-style: none;
  border-radius: 0.5rem;
  display: none;

  &.show {
    display: flex;
    flex-wrap: wrap;

    a,
    button {
      font-size: 20px !important;
      font-weight: 600;
    }

    @media (max-width: 1024px) {
      left: 20px;
      a,
      button {
        font-size: 14px !important;
        font-weight: 600;
      }
    }
  }

  .dropdown-submenu {
    a {
      font-size: 16px !important;
      font-weight: 600;
      @media (max-width: 768px) {
        font-size: 12px !important;
        padding-left: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    &.show {
      display: block;
      flex-wrap: wrap;
    }

    position: static;
    padding: 0px;

    a,
    button {
      padding-left: 5px;

      font-size: 14px !important;
      font-weight: 600;
    }
    button {
      position: relative;
      top: -8px;
    }
  }
`

MenuDropdown.propTypes = {
  dropdown: bool.isRequired,
  depthLevel: number.isRequired,
  submenus: array.isRequired
}

export default MenuDropdown
