import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

const StarIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d="M8.03439 0.62615L5.83739 5.28026L0.921884 6.029C0.0403897 6.16257 -0.312881 7.29798 0.326371 7.94829L3.88263 11.5689L3.04151 16.6835C2.8901 17.608 3.82207 18.3005 4.60262 17.8682L9 15.4532L13.3974 17.8682C14.1779 18.297 15.1099 17.608 14.9585 16.6835L14.1174 11.5689L17.6736 7.94829C18.3129 7.29798 17.9596 6.16257 17.0781 6.029L12.1626 5.28026L9.96561 0.62615C9.57196 -0.203435 8.4314 -0.213981 8.03439 0.62615Z" />
    </IconWrapper>
  )
}

StarIcon.propTypes = propTypes

export default StarIcon
