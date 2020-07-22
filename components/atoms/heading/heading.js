/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// UI
import { COLOUR } from '../../'
import { HeadingPropTypes, HeadingDefaultProps } from './props'

// Style
import styled, { css } from 'styled-components'

export const Heading = ({ className, content, context, noMargin, noWrap, style, tag }) => {
  return (
    <StyledHeading
      as={tag}
      className={className}
      context={context}
      noMargin={noMargin}
      noWrap={noWrap}
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
  ${({ as, noMargin, theme }) => css`
    font-family: ${theme.HEADINGS[as].fontFamily};
    font-size: ${theme.HEADINGS[as].fontSize};
    line-height: ${theme.HEADINGS[as].lineHeight};
    text-transform: ${theme.HEADINGS[as].textTransform};
    margin: ${noMargin ? 0 : '0 0 1.25rem 0'};
  `}

  ${({ noWrap }) =>
    noWrap &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`

Heading.propTypes = HeadingPropTypes

Heading.defaultProps = HeadingDefaultProps
