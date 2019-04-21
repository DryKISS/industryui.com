/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import { any, object, objectOf, oneOf, oneOfType, number, string } from 'prop-types'

// UI
import { COLOUR } from '../../'
import { CONTEXT } from '../../theme'

// Style
import styled from 'styled-components'

export const Heading = ({ className, content, context, style, tag }) => {
  return (
    <StyledComponent
      as={tag}
      className={className}
      context={context}
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
  font-size: ${props => props.as === 'h1' ? '2.25rem' : '2rem'};
  line-height: 1.22;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 2;
`

Heading.propTypes = {
  className: any,
  content: oneOfType([
    string,
    object
  ]),
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([
    number,
    string
  ])),
  tag: string
}

Heading.defaultProps = {
  context: 'dark',
  tag: 'h1'
}
