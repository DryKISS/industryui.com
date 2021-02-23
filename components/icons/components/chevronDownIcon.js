import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ChevronDownIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={22}>
      <path d='M11.5341 15.4445L6.19908 10.1094C5.94178 9.85211 5.94178 9.43496 6.19908 9.17769L6.82132 8.55544C7.07819 8.29858 7.49449 8.29809 7.75196 8.55435L12 12.7825L16.2479 8.55435C16.5054 8.29809 16.9217 8.29858 17.1786 8.55544L17.8008 9.17769C18.0581 9.43499 18.0581 9.85214 17.8008 10.1094L12.4658 15.4445C12.2085 15.7017 11.7914 15.7017 11.5341 15.4445Z' />
    </IconWrapper>
  )
}

ChevronDownIcon.propTypes = propTypes
