/**
 * Sidebar
 */

// React
import { array } from 'prop-types'

// UI
import { Icon, Link, List } from '../../../'
import { Divider } from '../../../atoms/divider/index'
import { ListItem } from '../../../atoms/list/components/listItem'

// Style
import styled, { css } from 'styled-components'

export const Sidebar = ({ data }) => {
  const link = (icon, name, to) => {
    const iconArray = Array.isArray(icon)

    return (
      <Link to={to} passHref>
        <StyledLink>
          {icon &&
            <Icon
              icon={icon ? iconArray ? icon[1] : icon : null}
              prefix={icon && iconArray && icon[0]}
            />}
          {name}
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledAside>
      <List group>

        {data.map(({ Component, divider, icon, name, to }, index) => {
          return (
            <StyledLi key={index}>
              {divider
                ? <StyledDivider size='sm' />
                : Component ? <Component />
                  : to ? link(icon, name, to)
                    : name}
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
  box-shadow: 0 0 4rem -1rem rgba(0, 0, 0, .75);
  height: 100%;
  padding: 1rem 0;
`

const StyledDivider = styled(Divider)`
  border-top-width: 1px;
  opacity: .2;
`

const StyledLi = styled(ListItem)`
  cursor: pointer;
  padding: 0;

  svg {
    margin-right: .5rem;
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

const StyledLink = styled.a`
  color: ${({ theme }) => theme.SIDEBAR.linkColour};
  display: block;
  padding: 1rem 1.5rem;
`

Sidebar.propTypes = {
  data: array.isRequired
}
