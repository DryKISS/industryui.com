/**
 * Components - Icons - Bell
 */

// React
import React from 'react'

// UI
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const BellIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d='M11.5 22C12.8403 22 13.9274 20.8809 13.9274 19.5H9.07257C9.07257 20.8809 10.1597 22 11.5 22ZM19.6733 16.152C18.9401 15.341 17.5684 14.1211 17.5684 10.125C17.5684 7.08984 15.5011 4.66016 12.7135 4.06406V3.25C12.7135 2.55977 12.1701 2 11.5 2C10.8299 2 10.2865 2.55977 10.2865 3.25V4.06406C7.49894 4.66016 5.43163 7.08984 5.43163 10.125C5.43163 14.1211 4.05987 15.341 3.32674 16.152C3.09907 16.4039 2.99813 16.7051 3.00003 17C3.0042 17.6406 3.49257 18.25 4.2181 18.25H18.7819C19.5074 18.25 19.9962 17.6406 20 17C20.0019 16.7051 19.9009 16.4035 19.6733 16.152Z' />
    </IconWrapper>
  )
}

export default BellIcon

BellIcon.propTypes = propTypes
