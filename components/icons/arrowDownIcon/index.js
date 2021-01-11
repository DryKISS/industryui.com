import { commonIconPropTypes } from '../propTypes'
import { IconWrapper } from '../wrapper'

export const ArrowDownIcon = props => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d='M7 10L12 15L17 10H7Z' />
    </IconWrapper>
  )
}

ArrowDownIcon.propTypes = commonIconPropTypes
