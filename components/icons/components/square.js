import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

const SquareIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={16}>
      <path d="M14.2857 0H1.71429C0.767857 0 0 0.767857 0 1.71429V14.2857C0 15.2321 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.2321 16 14.2857V1.71429C16 0.767857 15.2321 0 14.2857 0Z" />
    </IconWrapper>
  )
}

SquareIcon.propTypes = propTypes

export default SquareIcon
