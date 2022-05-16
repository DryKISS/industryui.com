/**
 * Components - Molecules - Components - MenuItems
 */

// React
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { array, number } from 'prop-types'

// UI
import Button from '../../../atoms/button/button/button'
import MenuDropdown from './MenuDropdown'

// Style
import styled from 'styled-components'

const MenuItems = ({ depthLevel, items }) => {
  const [dropdown, setDropdown] = useState(false)

  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onClickItem = () => {
    setDropdown(true)
  }

  return (
    <Wrapper ref={ref} onClick={onClickItem}>
      {items.submenu ? (
        <>
          <ButtonWrapper
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            className={dropdown ? 'isActive' : ''}
            onClick={() => setDropdown(true)}
          >
            {items.title} <Arrow />
          </ButtonWrapper>
          <MenuDropdown depthLevel={depthLevel} dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <Link href={items.href || '#'}>{items.title}</Link>
      )}
    </Wrapper>
  )
}

const ButtonWrapper = styled.button`
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  margin: 0px 10px;
  text-decoration-thickness: 2px;
  text-underline-position: under;
  text-underline-offset: 2px;

  &:hover {
    color: ${({ theme }) => theme.COLOUR.primary};
    text-decoration: underline;
  }

  @media (max-width: 1280px) {
    margin-left: 10px;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: left;
    padding-left: 10px;
  }
`

const Arrow = styled.span`
  &:after {
    content: '';
    position: relative;
    top: -1px;
    left: 4px;
    border: solid;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border-width: 0 3px 3px 0;

    @media (max-width: 1024px) {
      font-size: 14px;
      border-width: 0 2px 2px 0;
    }
  }
`

const Link = styled.a`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLOUR.primary};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 0px;
    padding-left: 28px;
  }
`

const Wrapper = styled.li`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLOUR.white};
  text-decoration-thickness: 2px;
  text-underline-position: under;
  text-underline-offset: 2px;

  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
  }

  .isActive {
    color: ${({ theme }) => theme.COLOUR.primary};
    text-decoration: underline;
  }
  & a {
    text-align: left;
    padding: 0.7rem 1rem;
    white-space: nowrap;
  }
`

MenuItems.propTypes = {
  depthLevel: number.isRequired,
  items: array.isRequired
}

export default MenuItems
