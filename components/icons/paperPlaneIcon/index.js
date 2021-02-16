import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'
export const PaperPlaneIcon = props => {
  return (
    <IconWrapper {...props} mainSize={18}>
      <path d='M16.7358 0.113557L0.439147 9.51245C-0.19725 9.878 -0.116382 10.7638 0.516499 11.0309L4.25401 12.5985L14.3555 3.69878C14.5489 3.52654 14.8231 3.79016 14.6579 3.99051L6.18781 14.3068V17.1363C6.18781 17.9658 7.18987 18.2927 7.68211 17.6917L9.91477 14.9746L14.2957 16.8094C14.795 17.0203 15.3646 16.7075 15.456 16.1697L17.9875 0.985257C18.1071 0.275244 17.3441 -0.237934 16.7358 0.113557Z' />
    </IconWrapper>
  )
}
PaperPlaneIcon.propTypes = propTypes
