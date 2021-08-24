import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const MapMarkerIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d="M11.1778 21.5965C5.12375 13.3684 4 12.5239 4 9.5C4 5.35785 7.58171 2 12 2C16.4183 2 20 5.35785 20 9.5C20 12.5239 18.8763 13.3684 12.8222 21.5965C12.4249 22.1345 11.5751 22.1345 11.1778 21.5965Z" />
    </IconWrapper>
  )
}

MapMarkerIcon.propTypes = propTypes

export default MapMarkerIcon
