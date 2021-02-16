import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const EditIcon = props => {
  return (
    <IconWrapper {...props} mainSize={19}>
      <path d='M11.1833 2.59738L13.6889 5.41668C13.7944 5.53546 13.7944 5.72924 13.6889 5.84802L7.62222 12.6744L5.04445 12.9963C4.7 13.04 4.40833 12.7119 4.44722 12.3243L4.73333 9.42372L10.8 2.59738C10.9056 2.47861 11.0778 2.47861 11.1833 2.59738ZM15.6833 1.88162L14.3278 0.35632C13.9056 -0.118773 13.2194 -0.118773 12.7944 0.35632L11.8111 1.46279C11.7056 1.58156 11.7056 1.77535 11.8111 1.89412L14.3167 4.71342C14.4222 4.83219 14.5944 4.83219 14.7 4.71342L15.6833 3.60695C16.1056 3.12874 16.1056 2.35671 15.6833 1.88162ZM10.6667 10.8177V13.9996H1.77778V3.99766H8.16111C8.25 3.99766 8.33333 3.95702 8.39722 3.88826L9.50833 2.63802C9.71944 2.40047 9.56944 1.99727 9.27222 1.99727H1.33333C0.597222 1.99727 0 2.66927 0 3.49756V14.4997C0 15.328 0.597222 16 1.33333 16H11.1111C11.8472 16 12.4444 15.328 12.4444 14.4997V9.56749C12.4444 9.23305 12.0861 9.0674 11.875 9.30182L10.7639 10.5521C10.7028 10.624 10.6667 10.7177 10.6667 10.8177Z' />
    </IconWrapper>
  )
}

EditIcon.propTypes = propTypes
