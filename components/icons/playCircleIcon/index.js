import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const PlayCircleIcon = props => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d='M10 0C4.47581 0 0 4.47581 0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10C20 4.47581 15.5242 0 10 0ZM14.6653 10.9677L7.56855 15.0403C6.93145 15.3952 6.12903 14.9395 6.12903 14.1935V5.80645C6.12903 5.06452 6.92742 4.60484 7.56855 4.95968L14.6653 9.27419C15.3266 9.64516 15.3266 10.6008 14.6653 10.9677Z' />
    </IconWrapper>
  )
}
PlayCircleIcon.propTypes = propTypes
