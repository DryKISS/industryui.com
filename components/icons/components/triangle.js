import React from 'react'
import { propTypes } from '../props'
import IconWrapper from '../wrapper'

const TriangleIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d="M10.2986 0.84375C9.72361 -0.28125 8.27681 -0.28125 7.69872 0.84375L0.202273 15.4688C-0.372694 16.5902 0.346015 18 1.5022 18H16.4982C17.6513 18 18.3731 16.5938 17.7981 15.4688L10.2986 0.84375Z" />
    </IconWrapper>
  )
}

TriangleIcon.propTypes = propTypes

export default TriangleIcon
