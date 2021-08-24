/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import themeColour from '../../utils/colour/colour'
import { propTypes, defaultProps } from './props'

const Heading = ({ className, content, context, noMargin, noWrap, style, tag }) => {
  return (
    <StyledHeading
      as={tag}
      className={className}
      context={context}
      noMargin={noMargin}
      noWrap={noWrap}
      itemProp="name headline"
      rel="bookmark"
      style={style}
    >
      {content && content.__html ? <span dangerouslySetInnerHTML={content} /> : content}
    </StyledHeading>
  )
}

const StyledHeading = styled.span`
  font-weight: normal;
  ${(props) => themeColour(props)}
  position: relative;
  ${({ as, theme }) => css`
    font-family: ${theme.HEADINGS[as].fontFamily};
    font-size: ${theme.HEADINGS[as].fontSize};
    line-height: ${theme.HEADINGS[as].lineHeight};
    text-transform: ${theme.HEADINGS[as].textTransform};
    margin: 0;
  `}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  ${({ noWrap }) =>
    noWrap &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
