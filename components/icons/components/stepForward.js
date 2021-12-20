import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const PauseCircleIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path
        d="M18 3.48238V20.5176C18 20.7828 17.7806 20.9997 17.5125 20.9997H15.5625C15.2944 20.9997 15.075 20.7828 15.075 20.5176V13.4303L7.13281 20.7024C6.29594 21.3895 5 20.8149 5 19.7141V4.28593C5 3.18507 6.29594 2.61053 7.13281 3.29757L15.075 10.5255V3.48238C15.075 3.21721 15.2944 3.00026 15.5625 3.00026H17.5125C17.7806 3.00026 18 3.21721 18 3.48238Z"
        fill="white"
      />
    </IconWrapper>
  )
}

PauseCircleIcon.propTypes = propTypes

export default PauseCircleIcon
