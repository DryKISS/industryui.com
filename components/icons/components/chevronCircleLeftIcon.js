// React
import React from 'react'

import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ChevronCircleLeftIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={18}>
      <path d="M9 18C4.02823 18 0 13.9718 0 9C0 4.02823 4.02823 0 9 0C13.9718 0 18 4.02823 18 9C18 13.9718 13.9718 18 9 18ZM4.86653 9.61693L9.78387 14.5343C10.125 14.8754 10.6766 14.8754 11.0141 14.5343L11.631 13.9173C11.9722 13.5762 11.9722 13.0246 11.631 12.6871L7.94395 9L11.631 5.3129C11.9722 4.97177 11.9722 4.42016 11.631 4.08266L11.0141 3.46573C10.673 3.1246 10.1214 3.1246 9.78387 3.46573L4.86653 8.38306C4.5254 8.72419 4.5254 9.27581 4.86653 9.61693Z" />
    </IconWrapper>
  )
}

ChevronCircleLeftIcon.propTypes = propTypes
