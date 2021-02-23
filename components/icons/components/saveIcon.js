import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const SaveIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d='M18.5293 8.06066L15.7207 5.43934C15.4193 5.15804 15.0105 5 14.5843 5H5.60714C4.71953 5 4 5.67156 4 6.5V17.5C4 18.3284 4.71953 19 5.60714 19H17.3929C18.2805 19 19 18.3284 19 17.5V9.12131C19 8.72349 18.8307 8.34196 18.5293 8.06066ZM11.5 17C10.3165 17 9.35714 16.1046 9.35714 15C9.35714 13.8954 10.3165 13 11.5 13C12.6835 13 13.6429 13.8954 13.6429 15C13.6429 16.1046 12.6835 17 11.5 17ZM14.7143 7.48375V10.625C14.7143 10.8321 14.5344 11 14.3125 11H6.54464C6.32276 11 6.14286 10.8321 6.14286 10.625V7.375C6.14286 7.16791 6.32276 7 6.54464 7H14.196C14.3026 7 14.4047 7.0395 14.4801 7.10984L14.5966 7.21859C14.6339 7.25341 14.6635 7.29475 14.6837 7.34024C14.7039 7.38574 14.7143 7.4345 14.7143 7.48375Z' />
    </IconWrapper>
  )
}

SaveIcon.propTypes = propTypes
