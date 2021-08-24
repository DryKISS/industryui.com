import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const PauseCircleIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d="M10 0C4.47581 0 0 4.47581 0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10C20 4.47581 15.5242 0 10 0ZM9.35484 13.2258C9.35484 13.5806 9.06452 13.871 8.70968 13.871H6.77419C6.41935 13.871 6.12903 13.5806 6.12903 13.2258V6.77419C6.12903 6.41935 6.41935 6.12903 6.77419 6.12903H8.70968C9.06452 6.12903 9.35484 6.41935 9.35484 6.77419V13.2258ZM13.871 13.2258C13.871 13.5806 13.5806 13.871 13.2258 13.871H11.2903C10.9355 13.871 10.6452 13.5806 10.6452 13.2258V6.77419C10.6452 6.41935 10.9355 6.12903 11.2903 6.12903H13.2258C13.5806 6.12903 13.871 6.41935 13.871 6.77419V13.2258Z" />
    </IconWrapper>
  )
}

PauseCircleIcon.propTypes = propTypes

export default PauseCircleIcon
