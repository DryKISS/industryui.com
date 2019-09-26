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
import { BACKGROUND, CONTEXT } from '../../'

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

Avatar.propTypes = {
  children: any,
  click: func,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([number, string]))
}

Avatar.defaultProps = {
  context: 'primary'
}
