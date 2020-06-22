/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import { any, object, objectOf, oneOf, oneOfType, number, string } from 'prop-types'

// UI
import { COLOUR, CONTEXT } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Heading = ({ className, content, context, style, tag }) => {
  return (
    <StyledHeading
      as={tag}
      className={className}
      context={context}
      itemProp='name headline'
      rel='bookmark'
      style={style}
    >
      {content && content.__html ? <span dangerouslySetInnerHTML={content} /> : content}
    </StyledHeading>
  )
}

const StyledHeading = styled.span`
  font-weight: normal;
  ${props => COLOUR(props)}
  position: relative;
  ${({ as, theme }) => css`
    font-family: ${theme.HEADINGS[as].fontFamily};
    font-size: ${theme.HEADINGS[as].fontSize};
    line-height: ${theme.HEADINGS[as].lineHeight};
    text-transform: ${theme.HEADINGS[as].textTransform};
    margin: 0;
  `}
`

Heading.propTypes = {
  className: any,
  content: oneOfType([string, object]).isRequired,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([number, string])),
  tag: string
}

Heading.defaultProps = {
  context: 'black',
  tag: 'h1'
}
