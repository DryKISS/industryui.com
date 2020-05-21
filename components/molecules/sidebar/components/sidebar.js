/**
 * Sidebar
 */

// React
import { array, string } from 'prop-types'

// UI
import { Image, Icon, Link, List } from '../../../'
import { Divider } from '../../../atoms/divider/divider'
import { ListItem } from '../../../atoms/list/components/listItem'

// Style
import styled, { css } from 'styled-components'

export const Sidebar = ({ brand, data }) => {
  const link = (icon, name, to) => {
    const iconArray = Array.isArray(icon)

    return (
      <Link to={to} passHref>
        <StyledLink>
          {icon && (
            <Icon
              icon={icon ? (iconArray ? icon[1] : icon) : null}
              prefix={icon && iconArray && icon[0]}
            />
          )}
          {name}
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledAside>
      <StyledBrand>
        <Image alt='Logo' src={brand} />
      </StyledBrand>

      <List group>
        {data.map(({ Component, divider, icon, name, to }, index) => {
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
  background-color: ${({ theme }) => theme.SIDEBAR.background};
  border-right: 1px solid ${({ theme }) => theme.SIDEBAR.highlight};
  box-shadow: 0 0 4rem -1rem rgba(0, 0, 0, 0.75);
  height: 100vh;
  left: 0;
  overflow: hidden;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 16.66667%;
`

const StyledBrand = styled.div`
  display: block;
  padding: 0 3rem;
  line-height: 2;
`

const StyledDivider = styled(Divider)`
  border-top-width: 1px;
  opacity: 0.2;
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
  color: ${({ theme }) => theme.SIDEBAR.linkColour};
  display: block;
  padding: 1rem 1.5rem;
`

Sidebar.propTypes = {
  brand: string,
  data: array.isRequired
}
