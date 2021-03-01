import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ListIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={24}>
      <path d="M7.37842 4.53333H21V6.66666H7.37842V4.53333Z" />
      <path d="M4.45946 7.2C5.2655 7.2 5.91892 6.48366 5.91892 5.6C5.91892 4.71634 5.2655 4 4.45946 4C3.65342 4 3 4.71634 3 5.6C3 6.48366 3.65342 7.2 4.45946 7.2Z" />
      <path d="M7.37842 10.9333H21V13.0667H7.37842V10.9333Z" />
      <path d="M7.37842 17.3333H21V19.4667H7.37842V17.3333Z" />
      <path d="M4.45946 20C5.2573 20 5.91892 19.2747 5.91892 18.4C5.91892 17.5253 5.26703 16.8 4.45946 16.8C3.65189 16.8 3 17.5253 3 18.4C3 19.2747 3.66162 20 4.45946 20Z" />
      <path d="M4.45946 13.6C5.2655 13.6 5.91892 12.8836 5.91892 12C5.91892 11.1163 5.2655 10.4 4.45946 10.4C3.65342 10.4 3 11.1163 3 12C3 12.8836 3.65342 13.6 4.45946 13.6Z" />
    </IconWrapper>
  )
}

export default ListIcon

ListIcon.propTypes = propTypes
