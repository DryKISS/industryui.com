import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const CircleIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={21} translate="translateY(2px)">
      <path d="M9.5 0C4.52823 0 0.5 4.02823 0.5 9C0.5 13.9718 4.52823 18 9.5 18C14.4718 18 18.5 13.9718 18.5 9C18.5 4.02823 14.4718 0 9.5 0Z" />
    </IconWrapper>
  )
}

export default CircleIcon

CircleIcon.propTypes = propTypes
