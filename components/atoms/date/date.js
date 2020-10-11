/**
 * Date
 */

// React
import { string } from 'prop-types'

// UI
import styled, { css } from 'styled-components'

export const Date = ({ date, size }) => {
  return (
    <StyledTime size={size} dateTime={date} itemProp='datePublished' pubdate='pubdate'>
      {date}
    </StyledTime>
  )
}
const StyledTime = styled.time`
  ${({ size, theme }) => css`
    font-size: ${theme.TEXT_STYLE.FONT_SIZE[size] ?? '1rem'};
    line-height: ${theme.TEXT_STYLE.LINE_HEIGHT[size] ?? '1rem'};
    /* stylelint-disable */
    font-family: ${theme.TEXT_STYLE.FONT_FAMILY[size] ??
      theme.TEXT_STYLE.FONT_FAMILY.default ??
      'sans-serif'};
    color: ${theme.COLOUR.black};
  `}
`
Date.propTypes = {
  date: string.isRequired
}
Date.defaultProps = {
  size: 'md'
}
