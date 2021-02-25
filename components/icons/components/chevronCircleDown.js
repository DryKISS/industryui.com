import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ChevronCircleDownIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={18}>
      <path d='M18 9C18 13.9718 13.9718 18 9 18C4.02823 18 0 13.9718 0 9C0 4.02823 4.02823 0 9 0C13.9718 0 18 4.02823 18 9ZM9.61693 13.1335L14.5343 8.21613C14.8754 7.875 14.8754 7.32339 14.5343 6.98589L13.9173 6.36895C13.5762 6.02782 13.0246 6.02782 12.6871 6.36895L9 10.056L5.3129 6.36895C4.97177 6.02782 4.42016 6.02782 4.08266 6.36895L3.46573 6.98589C3.1246 7.32702 3.1246 7.87863 3.46573 8.21613L8.38306 13.1335C8.72419 13.4746 9.27581 13.4746 9.61693 13.1335Z' />
    </IconWrapper>
  )
}

export default ChevronCircleDownIcon

ChevronCircleDownIcon.propTypes = propTypes
