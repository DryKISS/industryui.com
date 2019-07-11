/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import { any, bool, object, objectOf, oneOf, oneOfType, number, string } from 'prop-types'

// UI
import { COLOUR, CONTEXT } from '../../'

// Style
import styled from 'styled-components'

export const Heading = ({ className, content, context, noMargin, style, tag }) => {
  return (
    <StyledComponent
      as={tag}
      className={className}
      context={context}
      noMargin={noMargin}
      itemProp='name headline'
      rel='bookmark'
      style={style}
    >
      {content && content.__html ? <span dangerouslySetInnerHTML={content} /> : content}
    </StyledComponent>
  )
}

const StyledComponent = styled.span`
  ${props => COLOUR(props)}
  font-size: ${({ as }) =>
    (as === 'h1' && '2.25rem') ||
    (as === 'h2' && '2rem') ||
    '1.5rem'
};
  line-height: 1.22;
  margin: ${({ noMargin }) => noMargin ? 0 : '0 0 2rem 0'};
  position: relative;
  /* z-index: 2; */
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
  context: 'dark',
  tag: 'h1'
}
