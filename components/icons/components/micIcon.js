import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'
export const MicIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={24}>
      <path d='M11.499 16.124C13.7584 16.124 15.5899 14.2772 15.5899 11.999V5.12402C15.5899 2.84582 13.7584 0.999023 11.499 0.999023C9.23965 0.999023 7.40811 2.84582 7.40811 5.12402V11.999C7.40811 14.2772 9.23965 16.124 11.499 16.124ZM18.3172 9.24902H17.6354C17.2587 9.24902 16.9536 9.55668 16.9536 9.93652V11.999C16.9536 15.2131 14.2054 17.7921 10.954 17.4724C8.12019 17.1935 6.04448 14.6248 6.04448 11.7541V9.93652C6.04448 9.55668 5.73936 9.24902 5.36266 9.24902H4.68084C4.30414 9.24902 3.99902 9.55668 3.99902 9.93652V11.6621C3.99902 15.5139 6.72502 18.9475 10.4763 19.4691V20.9365H8.08993C7.71323 20.9365 7.40811 21.2442 7.40811 21.624V22.3115C7.40811 22.6914 7.71323 22.999 8.08993 22.999H14.9081C15.2848 22.999 15.5899 22.6914 15.5899 22.3115V21.624C15.5899 21.2442 15.2848 20.9365 14.9081 20.9365H12.5218V19.4855C16.1742 18.9802 18.999 15.8189 18.999 11.999V9.93652C18.999 9.55668 18.6939 9.24902 18.3172 9.24902Z' />
    </IconWrapper>
  )
}
MicIcon.propTypes = propTypes
