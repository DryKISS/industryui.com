import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const ChevronUpIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d="M12.462 8.58433L17.7523 13.8747C18.0074 14.1298 18.0074 14.5435 17.7523 14.7986L17.1353 15.4156C16.8805 15.6703 16.4677 15.6708 16.2124 15.4167L12 11.224L7.78757 15.4167C7.53226 15.6708 7.11944 15.6704 6.86473 15.4156L6.2477 14.7986C5.99255 14.5435 5.99255 14.1298 6.2477 13.8747L11.538 8.58435C11.7931 8.32921 12.2068 8.32921 12.462 8.58433Z" />
    </IconWrapper>
  )
}

ChevronUpIcon.propTypes = propTypes

export default ChevronUpIcon
