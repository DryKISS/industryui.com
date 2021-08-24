// React
import React from 'react'

import { propTypes } from '../props'
import IconWrapper from '../wrapper'

const CheckCircleIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={19}>
      <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02942 18 0 13.9706 0 9C0 4.02942 4.02942 0 9 0C13.9706 0 18 4.02942 18 9ZM7.95898 13.7654L14.6364 7.08801C14.8631 6.86127 14.8631 6.49361 14.6364 6.26687L13.8153 5.44573C13.5885 5.21895 13.2209 5.21895 12.9941 5.44573L7.54839 10.8914L5.00592 8.34892C4.77918 8.12217 4.41152 8.12217 4.18475 8.34892L3.3636 9.17006C3.13686 9.3968 3.13686 9.76445 3.3636 9.9912L7.1378 13.7654C7.36458 13.9922 7.7322 13.9922 7.95898 13.7654Z" />
    </IconWrapper>
  )
}

CheckCircleIcon.propTypes = propTypes

export default CheckCircleIcon
