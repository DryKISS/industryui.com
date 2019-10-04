/**
 * Sidebar
 */

// React
import React from 'react'
import { array, oneOf } from 'prop-types'

// UI
import {
  Divider,
  Icon,
  Link,
  List
} from '../../../'

import styled from 'styled-components'

export const Sidebar = ({ context, data }) => {
  const link = (icon, name, to) => {
    return (
      <Link to={to} passHref>
        <StyledLink context={context}>
          {icon && <Icon icon={icon} />} {name}
        </StyledLink>
      </Link>
    )
  }

  return (
    <List group>

      {data.map(({ Component, divider, icon, name, to }, index) => (
        <React.Fragment key={index}>
          {divider
            ? <Divider colour='#e8e8e8' size='sm' />
            : Component ? <Component />
              : to ? link(icon, name, to)
                : name}
        </React.Fragment>
      ))}

    </List>
  )
}

const StyledLink = styled.a`
  color: ${({ context }) => context === 'light' ? '#5c6f7f' : '#b8beca'};
  display: block;
  &:hover {
    color: ${({ context }) => context === 'light' ? '#6b7a87' : '#fff'};
  }
`

Sidebar.propTypes = {
  context: oneOf(['dark', 'light']),
  data: array.isRequired
}
