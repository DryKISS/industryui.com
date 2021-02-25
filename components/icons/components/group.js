import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const GroupIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d="M6.4 11C7.2825 11 8 10.1031 8 9.00002C8 7.89689 7.2825 7.00002 6.4 7.00002C5.5175 7.00002 4.8 7.89689 4.8 9.00002C4.8 10.1031 5.5175 11 6.4 11ZM17.6 11C18.4825 11 19.2 10.1031 19.2 9.00002C19.2 7.89689 18.4825 7.00002 17.6 7.00002C16.7175 7.00002 16 7.89689 16 9.00002C16 10.1031 16.7175 11 17.6 11ZM18.4 12H16.8C16.36 12 15.9625 12.2219 15.6725 12.5813C16.68 13.2719 17.395 14.5188 17.55 16H19.2C19.6425 16 20 15.5531 20 15V14C20 12.8969 19.2825 12 18.4 12ZM12 12C13.5475 12 14.8 10.4344 14.8 8.50002C14.8 6.56564 13.5475 5.00002 12 5.00002C10.4525 5.00002 9.2 6.56564 9.2 8.50002C9.2 10.4344 10.4525 12 12 12ZM13.92 13H13.7125C13.1925 13.3125 12.615 13.5 12 13.5C11.385 13.5 10.81 13.3125 10.2875 13H10.08C8.49 13 7.2 14.6125 7.2 16.6V17.5C7.2 18.3281 7.7375 19 8.4 19H15.6C16.2625 19 16.8 18.3281 16.8 17.5V16.6C16.8 14.6125 15.51 13 13.92 13ZM8.3275 12.5813C8.0375 12.2219 7.64 12 7.2 12H5.6C4.7175 12 4 12.8969 4 14V15C4 15.5531 4.3575 16 4.8 16H6.4475C6.605 14.5188 7.32 13.2719 8.3275 12.5813Z" />
    </IconWrapper>
  )
}

export default GroupIcon

GroupIcon.propTypes = propTypes
