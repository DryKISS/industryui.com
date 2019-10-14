/**
 * Badge
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Badge = ({ className, content, style, to }) => {
  return (
    <StyledBadge
      className={className}
      itemProp='keywords'
      href={to}
      style={style}
    >
      {content}
    </StyledBadge>
  )
}

const StyledBadge = styled.a`
  background-color: #e4e3e3;
  color: #3e3e3e;
  border-radius: 0;
  display: inline-block;
  font-size: 90%;
  line-height: 1;
  margin: 0 .5em .5em 0;
  padding: .5em;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover {
    background-color: #CAC7C7;
    color: #000;
  }

  &:empty {
    display: none;
  }
`

Badge.propTypes = {
  content: string.isRequired,
  to: string
}
