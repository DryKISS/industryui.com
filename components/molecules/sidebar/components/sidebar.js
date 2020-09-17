/**
 * Sidebar
 */

// React
import React, { useState } from 'react'
import { array, string, object } from 'prop-types'

// UI
import { Image, Icon, Link, List } from '../../../'
import { Divider } from '../../../atoms/divider/divider'
import { ListItem } from '../../../atoms/list/components/listItem'

// Style
import styled, { css } from 'styled-components'

export const Sidebar = ({ brand, data, styles }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    console.log('is collapsed')
    setIsCollapsed(!isCollapsed)
  }

  const link = (icon, name, to) => {
    const iconArray = Array.isArray(icon)

    return (
      <Link to={to} passHref>
        <StyledLink styles={styles} isCollapsed={isCollapsed}>
          {icon && (
            <Icon
              icon={icon ? (iconArray ? icon[1] : icon) : null}
              prefix={icon && iconArray && icon[0]}
            />
          )}
          {!isCollapsed && <span>{name}</span>}
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledAside isCollapsed={isCollapsed}>
      <StyledBrand>
        <Image alt='Logo' src={brand} />
      </StyledBrand>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <p
          style={{
            color: 'white',
            backgroundColor: 'grey',
            paddingLeft: '10px',
            paddingRight: '10px'
          }}
          onClick={handleCollapse}
        >
          Coll
        </p>
      </div>
      {/* Will have to refactorize this */}
      {data.title && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <p
            style={{
              color: 'white'
            }}
          >
            {data.title}
          </p>
        </div>
      )}
      <List group>
        {data.items.map(({ Component, divider, icon, name, to }, index) => {
          return (
            <StyledLi key={index}>
              {divider ? (
                <StyledDivider size='sm' />
              ) : Component ? (
                <Component />
              ) : to ? (
                link(icon, name, to)
              ) : (
                name
              )}
            </StyledLi>
          )
        })}
      </List>
    </StyledAside>
  )
}

const StyledAside = styled.aside`
  width: ${({ isCollapsed }) => (isCollapsed ? '7em' : '20em')};
  background-color: ${({ theme }) => theme.SIDEBAR.background};
  border-right: 1px solid ${({ theme }) => theme.SIDEBAR.highlight};
  box-shadow: 0 0 4rem -1rem rgba(0, 0, 0, 0.75);
  height: 100vh;
  left: 0;
  overflow: hidden;
  padding: 1rem 0;
  /* We will have to play later with fixed or the parent */
  position: sticky;
  top: 0;
`

const StyledBrand = styled.div`
  display: block;
  padding: 0 3rem;
  line-height: 2;
`

const StyledDivider = styled(Divider)`
  border-top-width: 1px;
  opacity: 0.2;
  cursor: none;
`

const StyledLi = styled(ListItem)`
  cursor: pointer;
  padding: 0;
  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.SIDEBAR.linkHover};
      border-right: 2px solid ${theme.SIDEBAR.highlight};

      a {
        color: ${theme.SIDEBAR.highlight};
      }
    `}
  }
`

const StyledLink = styled.span`
  color: ${({ theme, styles }) =>
    styles?.linkColor ? styles.linkColor : theme.SIDEBAR.linkColour};
  display: block;
  display: flex;
  justify-content: ${({ styles, isCollapsed }) =>
    styles?.justifyContent ? styles.justifyContent : isCollapsed ? 'center' : 'start'};
  padding: 1rem 1.5rem;
`

Sidebar.propTypes = {
  brand: string,
  data: array.isRequired,
  styles: object
}
