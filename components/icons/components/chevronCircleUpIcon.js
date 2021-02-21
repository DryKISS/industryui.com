import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ChevronCircleUpIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={18}>
      <path d="M0 9C0 4.02823 4.02823 0 9 0C13.9718 0 18 4.02823 18 9C18 13.9718 13.9718 18 9 18C4.02823 18 0 13.9718 0 9ZM8.38306 4.86653L3.46573 9.78387C3.1246 10.125 3.1246 10.6766 3.46573 11.0141L4.08266 11.631C4.42379 11.9722 4.9754 11.9722 5.3129 11.631L9 7.94395L12.6871 11.631C13.0282 11.9722 13.5798 11.9722 13.9173 11.631L14.5343 11.0141C14.8754 10.673 14.8754 10.1214 14.5343 9.78387L9.61693 4.86653C9.27581 4.5254 8.72419 4.5254 8.38306 4.86653Z" />
    </IconWrapper>
  )
}

ChevronCircleUpIcon.propTypes = propTypes
