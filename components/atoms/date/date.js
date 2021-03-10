/**
 * Components - Atoms - Date
 */

// React
import React from 'react'
import { oneOf, string } from 'prop-types'

// Size
import styled from 'styled-components'

// UI
import { THEME_SIZE } from '../../theme/constants/size'

export const Date = ({ date, size }) => {
  return (
    <StyledTime dateTime={date} itemProp="datePublished" pubdate="pubdate" size={size}>
      {date}
    </StyledTime>
  )
}

const StyledTime = styled.time`
  ${({ size, theme }) => `
    color: ${theme.COLOUR.black};
    font-size: ${theme.TEXT.FONT_SIZE[size] ?? '1rem'};
    line-height: ${theme.TEXT.LINE_HEIGHT[size] ?? '1rem'};
  `}
`

Date.propTypes = {
  date: string.isRequired,
  size: oneOf(Object.values(THEME_SIZE)),
}

Date.defaultProps = {
  size: 'md',
}
