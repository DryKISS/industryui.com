/**
 * Components - Molecules - Navbar — Widgets
 */

// React
import React from 'react'
import { bool, func, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import MEDIA_QUERY from '../../../utils/mediaQuery/query'
import NavButton from './button'
import NavCollapse from './collapse'
import NavDropdown from './dropdown'
import NavIcon from './icon'
import NavLink from './link'
import NavNotification from './notification'

const NavWidgets = ({ brand, closeMenu, type, visible, widgets }) => {
  return (
    <NavCollapse visible={visible}>
      {Object.entries(widgets).map(([direction, link]) => (
        <StyledList direction={direction} key={direction}>
          {link.map(
            ({ active, Component, icon, id, name, onClick, position, prefix, to, type }) => (
              <StyledListItem brand={brand} key={id}>
                {Component && <Component />}

                {type &&
                  type.as === 'button' &&
                  NavButton({ closeMenu, id, name, to, type, visible })}

                {type && type.as === 'icon' && NavIcon({ closeMenu, to, type, visible })}

                {type &&
                  type.as === 'dropdown' &&
                  NavDropdown({
                    closeMenu,
                    icon,
                    name,
                    position,
                    prefix,
                    type
                  })}

                {type &&
                  type.as === 'notification' &&
                  NavNotification({ closeMenu, to, type, visible })}

                {!Component &&
                  (!type || type.as === 'link') &&
                  NavLink({
                    active,
                    closeMenu,
                    id,
                    name,
                    onClick,
                    to,
                    visible
                  })}
              </StyledListItem>
            )
          )}
        </StyledList>
      ))}
    </NavCollapse>
  )
}

const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.NAVBAR.listBackground};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.NAVBAR.listFontSize};
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  ${({ direction, theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
    background-color: initial;
    flex-direction: row;
    flex: 1;
    justify-content: ${direction === 'left' ? 'flex-start' : 'flex-end'};
    text-align: left;
  `}
`

const StyledListItem = styled.li`
  position: relative;
  border-top: ${({ theme }) => theme.NAVBAR.listItemBorderTop};
  background-color: ${({ theme }) => theme.NAVBAR.listItemBackground};
  &:hover {
    background-color: ${({ theme }) => theme.NAVBAR.listItemBackgroundHover};
    border-bottom: ${({ theme }) => theme.NAVBAR.listItemBorderBottomHover};
  }
  ${(props) =>
    !props.brand &&
    css`
      &:first-child {
        margin-left: 0;
      }
    `}

  ${({ theme }) => MEDIA_QUERY[theme.NAVBAR.breakpoint]`
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: ${theme.NAVBAR.listItemJustifyContentDesktop};
    margin-bottom: ${theme.NAVBAR.listItemMarginBottomDesktop};
  `}
`

NavWidgets.propTypes = {
  brand: string,
  closeMenu: func,
  type: string,
  visible: bool,
  widgets: object.isRequired
}

export default NavWidgets
