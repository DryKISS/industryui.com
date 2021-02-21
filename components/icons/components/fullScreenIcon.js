// React
import React from 'react'

import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const FullScreenIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={24}>
      <path d="M5.57143 9.42857H3V3H9.42857V5.57143H5.57143V9.42857ZM3 14.5714H5.57143V18.4286H9.42857V21H3V14.5714ZM18.4285 18.4286H14.5714V21H21V14.5714H18.4285V18.4286ZM14.5714 5.57143V3H21V9.42857H18.4285V5.57143H14.5714Z" />
    </IconWrapper>
  )
}

FullScreenIcon.propTypes = propTypes
