import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const ChevronRightIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d="M15.4435 12.4657L10.1101 17.7991C9.85286 18.0563 9.43583 18.0563 9.17864 17.7991L8.55659 17.177C8.2998 16.9202 8.29931 16.504 8.55549 16.2467L12.7823 12L8.55549 7.75331C8.29931 7.49592 8.2998 7.07975 8.55659 6.82296L9.17864 6.20091C9.43586 5.94369 9.85289 5.94369 10.1101 6.20091L15.4434 11.5343C15.7007 11.7915 15.7007 12.2085 15.4435 12.4657Z" />
    </IconWrapper>
  )
}

ChevronRightIcon.propTypes = propTypes

export default ChevronRightIcon
