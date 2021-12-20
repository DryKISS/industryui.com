import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const StepBackwardIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path
        d="M5 20.5176V3.48238C5 3.21721 5.21937 3.00026 5.4875 3.00026H7.4375C7.70562 3.00026 7.925 3.21721 7.925 3.48238V10.5697L15.8672 3.29757C16.7041 2.61053 18 3.18507 18 4.28593V19.7141C18 20.8149 16.7041 21.3895 15.8672 20.7024L7.925 13.4745V20.5176C7.925 20.7828 7.70562 20.9997 7.4375 20.9997H5.4875C5.21937 20.9997 5 20.7828 5 20.5176Z"
        fill="white"
      />
    </IconWrapper>
  )
}

StepBackwardIcon.propTypes = propTypes

export default StepBackwardIcon
