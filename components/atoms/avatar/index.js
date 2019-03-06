/**
 * Avatar
 */

// React
import {
  any,
  func,
  number,
  objectOf,
  oneOf,
  oneOfType,
  string
} from 'prop-types'

// UI
import { BACKGROUND } from '../../'
import { CONTEXT } from '../../theme'

// Style
import styled from 'styled-components'

export const Avatar = ({
  children,
  className,
  click,
  content,
  context,
  style
}) => {
  return (
    <StyledAvatar
      className={className}
      context={context}
      onClick={click}
      style={style}
    >
      {children || content}
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  children: any,
  click: func,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([
    number,
    string
  ]))
}

Avatar.defaultProps = {
  context: 'primary'
}

const StyledAvatar = styled.div`
  align-items: center;
  ${props => BACKGROUND(props)}
  border-radius: 50%;
  color: #3a4e5f;
  display: flex;
  height: 56px;
  justify-content: center;
  min-width: 56px;
  width: 56px;
`

// .Avatar-medium {
//   font-size: 14px;
//   height: 2rem;
//   min-width: 2rem;
//   width: 2rem;
// }

// .Avatar-dark {
//   background-color: #3a4e5f;
//   color: #ecf0f3;
// }

// .Avatar-dark:hover {
//   background-color: #0679d8;
//   color: #ecf0f3;
// }
