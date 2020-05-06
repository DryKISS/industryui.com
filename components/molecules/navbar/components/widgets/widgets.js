/**
 * Navbar — Widgets
 */

// React
import { bool, func, object, string } from 'prop-types'

// UI
import {
  MEDIA_QUERY,
  NavButton,
  NavCollapse,
  NavDropdown,
  NavIcon,
  NavLink,
  NavNotification
} from '../../../../'

// Style
import styled, { css } from 'styled-components'

export const Widgets = ({ brand, closeMenu, type, visible, widgets }) => {
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
                  NavDropdown({ icon, name, position, prefix, type })}

                {type &&
                  type.as === 'notification' &&
                  NavNotification({ closeMenu, to, type, visible })}

                {!Component &&
                  (!type || type.as === 'link') &&
                  NavLink({ active, closeMenu, id, name, onClick, to, visible })}
              </StyledListItem>
            )
          )}
        </StyledList>
      ))}
    </NavCollapse>
  )
}

const StyledList = styled.ul`
  background-color: ${({ theme }) =>
    theme.NAVBAR.backgroundList ? theme.NAVBAR.backgroundList : theme.NAVBAR.background};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => (theme.NAVBAR.fontSizeList ? theme.NAVBAR.fontSizeList : '0.8rem')};
  list-style: none;
  margin: 0;
  margin-top: 1px;
  padding: 0;
  text-align: center;
  ${MEDIA_QUERY.desktop`
    background-color: initial;
    flex-direction: row;
    flex: 1;
    justify-content: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'flex-end')};
    text-align: left;
  `}
`

const StyledListItem = styled.li`
  position: relative;
  border-top: ${({ theme }) =>
    theme.NAVBAR.borderTopListItem ? theme.NAVBAR.borderTopListItem : '#33475b 1px solid'};
  background-color: ${({ theme }) =>
    theme.NAVBAR.backgroundListItem ? theme.NAVBAR.backgroundListItem : 'transparent'};
  ${MEDIA_QUERY.desktop`
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: ${({ theme }) =>
      theme.NAVBAR.justifyContentDesktopListItem
        ? theme.NAVBAR.justifyContentDesktopListItem
        : 'center'};
    margin-bottom: ${({ theme }) =>
      theme.NAVBAR.marginBottomDesktopListItem
        ? theme.NAVBAR.marginBottomDesktopListItem
        : 'inherit'};
  `}
  &:hover {
    background-color: ${({ theme }) =>
      theme.NAVBAR.backgroundHoverListItem
        ? theme.NAVBAR.backgroundHoverListItem
        : 'rgb(37, 51, 66)'};
    border-bottom: ${({ theme }) =>
      theme.NAVBAR.borderBottomHoverListItem ? theme.NAVBAR.borderBottomHoverListItem : 'none'};
  }
  ${props =>
    !props.brand &&
    css`
      &:first-child {
        margin-left: 0;
      }
    `}
`

Widgets.propTypes = {
  brand: string,
  closeMenu: func,
  type: string,
  visible: bool,
  widgets: object.isRequired
}
