/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import { any, bool, object, objectOf, oneOf, oneOfType, number, string } from 'prop-types'

// UI
import { COLOUR, CONTEXT } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Heading = ({ className, content, context, noMargin, style, tag }) => {
  return (
    <StyledHeading
      as={tag}
      className={className}
      context={context}
      noMargin={noMargin}
      itemProp='name headline'
      rel='bookmark'
      style={style}
    >
      {content && content.__html ? <span dangerouslySetInnerHTML={content} /> : content}
    </StyledHeading>
  )
}

const StyledHeading = styled.span`
  ${props => COLOUR(props)}
  position: relative;
  ${({ as, noMargin, theme }) => css`
    font-family: ${theme.HEADINGS[as].fontFamily};
    font-size: ${theme.HEADINGS[as].fontSize};
    line-height: ${theme.HEADINGS[as].lineHeight};
    text-transform: ${theme.HEADINGS[as].textTransform};
    margin: ${noMargin ? 0 : '0 0 1.25rem 0'};
  `}
`

Heading.propTypes = {
  className: any,
  content: oneOfType([string, object]),
  context: oneOf(Object.values(CONTEXT)),
  noMargin: bool,
  style: objectOf(oneOfType([number, string])),
  tag: string
}

Heading.defaultProps = {
  context: 'black',
  tag: 'h1'
}
