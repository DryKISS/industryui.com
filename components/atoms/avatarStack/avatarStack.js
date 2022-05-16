/**
 * Components - Atoms - Avatar Stack
 */

// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import Avatar from '../avatar/avatar'
import getAcronym from '../../utils/getAcronym/getAcronym'
import themeFontSize from '../../utils/fontSize/fontSize'
import THEME_SIZE from '../../constants/size'

// Props
import { propTypes } from './components/props'

const AvatarStack = ({ children, className, limit, style }) => {
  let childs = children
  let count = 0

  if (limit > 0) {
    const array = React.Children.toArray(children)
    childs = React.Children.toArray(children).slice(0, limit)
    count = array.length - limit
  }

  return (
    <StyledStack className={className} style={style}>
      {childs}
      {limit > 0 && count > 0 && <Avatar context="light" text={`+${count}`} />}
    </StyledStack>
  )
}

const StyledStack = styled.div`
  display: flex;
  flex-grow: 0;
  padding-left: 10px;

  > div,
  > a {
    border: 2px solid ${({ theme }) => theme.COLOUR['white']};
    margin-left: -0.75rem;
    overflow: hidden;
    position: relative;
    user-select: none;
  }
`

AvatarStack.propTypes = propTypes

export default AvatarStack
