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
  background-color: ${({ theme }) => theme.NAVBAR.backgroundList};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.NAVBAR.fontSizeList};
  list-style: none;
  margin: 0;
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
  border-top: ${({ theme }) => theme.NAVBAR.borderTopListItem};
  background-color: ${({ theme }) => theme.NAVBAR.backgroundListItem};
  &:hover {
    background-color: ${({ theme }) => theme.NAVBAR.backgroundHoverListItem};
    border-bottom: ${({ theme }) => theme.NAVBAR.borderBottomHoverListItem};
  }
  ${props =>
    !props.brand &&
    css`
      &:first-child {
        margin-left: 0;
      }
    `}
  ${MEDIA_QUERY.desktop`
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: ${({ theme }) => theme.NAVBAR.justifyContentDesktopListItem};
    margin-bottom: ${({ theme }) => theme.NAVBAR.marginBottomDesktopListItem};
  `}
`

Widgets.propTypes = {
  brand: string,
  closeMenu: func,
  type: string,
  visible: bool,
  widgets: object.isRequired
}
