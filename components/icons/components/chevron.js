import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const ChevronIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={36}>
      <path d="M18 36C8.05645 36 0 27.9435 0 18C0 8.05645 8.05645 0 18 0C27.9435 0 36 8.05645 36 18C36 27.9435 27.9435 36 18 36ZM9.73306 19.2339L19.5677 29.0685C20.25 29.7508 21.3532 29.7508 22.0282 29.0685L23.2621 27.8347C23.9444 27.1524 23.9444 26.0492 23.2621 25.3742L15.8879 18L23.2621 10.6258C23.9444 9.94355 23.9444 8.84032 23.2621 8.16532L22.0282 6.93145C21.346 6.24919 20.2427 6.24919 19.5677 6.93145L9.73306 16.7661C9.05081 17.4484 9.05081 18.5516 9.73306 19.2339Z" />
    </IconWrapper>
  )
}

ChevronIcon.propTypes = propTypes

export default ChevronIcon
