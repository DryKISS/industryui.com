/**
 * Components - Molecules - Components - MenuItems
 */

// React
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
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-position: under;
  text-underline-offset: 2px;

  &:hover {
    color: #ef1c24;
    text-decoration: underline;
  }
`

const Arrow = styled.span`
  &:after {
    content: '';
    position: relative;
    top: -4px;
    left: 4px;
    border: solid;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`

const Link = styled.a`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ef1c24;
    text-decoration: underline;
  }
`

const Wrapper = styled.li`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 20px;
  color: #ffffff;
  text-decoration-thickness: 2px;
  text-underline-position: under;
  text-underline-offset: 2px;

  .isActive {
    color: #ef1c24;
    text-decoration: underline;
  }
  & a {
    text-align: left;
    padding: 0.7rem 1rem;
  }
`

MenuItems.propTypes = {
  depthLevel: number.isRequired,
  items: array.isRequired
}

export default MenuItems
