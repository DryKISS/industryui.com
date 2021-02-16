import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ChevronLeftIcon = props => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d='M8.58147 11.5343L13.8763 6.2028C14.1315 5.94575 14.5456 5.94575 14.8009 6.2028L15.4185 6.82473C15.6735 7.08151 15.6738 7.49741 15.4196 7.75474L11.2233 11.9999L15.4193 16.2453C15.6738 16.5026 15.6733 16.9185 15.4183 17.1753L14.8006 17.7972C14.5454 18.0543 14.1313 18.0543 13.876 17.7972L8.58147 12.4654C8.3262 12.2084 8.3262 11.7914 8.58147 11.5343Z' />
    </IconWrapper>
  )
}

ChevronLeftIcon.propTypes = propTypes
