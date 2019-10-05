/**
 * Sidebar
 */

// React
import { array, oneOf } from 'prop-types'

// UI
import { Icon, Link, List } from '../../../'
import { Divider } from '../../../atoms/divider/index'
import { ListItem } from '../../../atoms/list/components/listItem'

// Style
import styled from 'styled-components'

export const Sidebar = ({ context, data }) => {
  const link = (icon, name, to) => {
    return (
      <Link to={to} passHref>
        <StyledLink context={context}>
          {icon && <Icon icon={icon[1] || icon} prefix={icon[0] || null} />} {name}
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledAside context={context}>
      <List group>
        {data.map(({ Component, divider, icon, name, to }, index) => (
          <StyledLi key={index}>
            {divider
              ? <StyledDivider size='sm' />
              : Component ? <Component />
                : to ? link(icon, name, to)
                  : name}
          </StyledLi>
        ))}
      </List>
    </StyledAside>
  )
}

const StyledAside = styled.aside`
  background-color: ${({ context }) => context === 'dark' ? '#001529' : 'initial'};
  border-right: 1px solid #eef1f4;
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
    background-color: ${({ context }) => context === 'light' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.75)'};
    border-right: 2px solid #00ccbc;

    a {
      color: #00ccbc;
    }
  }
`

const StyledLink = styled.a`
  color: ${({ context }) => context === 'light' ? '#5c6f7f' : '#b8beca'};
  display: block;
  padding: 1rem 1.5rem;
`

Sidebar.propTypes = {
  context: oneOf(['dark', 'light']),
  data: array.isRequired
}

Sidebar.defaultProps = {
  context: 'dark'
}
