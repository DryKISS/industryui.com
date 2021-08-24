/**
 * Components - Icons - Arrow Down
 */

// React
import React from 'react'
import propTypes from '../props'

// UI
import IconWrapper from '../wrapper'

const ArrowDownIcon = (props) => {
  return (
    <IconWrapper name="iconArrowDown" {...props} mainSize={22}>
      <path d="M7 10L12 15L17 10H7Z" />
    </IconWrapper>
  )
}

ArrowDownIcon.propTypes = propTypes

export default ArrowDownIcon
