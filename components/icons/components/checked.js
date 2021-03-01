import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const CheckedIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d="M9.1136 18.725L3.26359 12.6235C2.91214 12.2569 2.91214 11.6626 3.26359 11.296L4.53636 9.96843C4.88781 9.60182 5.4577 9.60182 5.80915 9.96843L9.75 14.0787L18.1908 5.27493C18.5423 4.90836 19.1122 4.90836 19.4636 5.27493L20.7364 6.60246C21.0879 6.96903 21.0879 7.56338 20.7364 7.92998L10.3864 18.7251C10.0349 19.0916 9.46506 19.0916 9.1136 18.725Z" />
    </IconWrapper>
  )
}

export default CheckedIcon

CheckedIcon.propTypes = propTypes
