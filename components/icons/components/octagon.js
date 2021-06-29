import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

const OctagonIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={19}>
      <path d="M12.7065 0.495703C12.3902 0.179297 11.9613 0 11.5149 0H6.48506C6.03866 0 5.60984 0.179297 5.2935 0.495703L0.495606 5.29102C0.179262 5.60742 0 6.03633 0 6.48281V11.5137C0 11.9602 0.179262 12.3891 0.495606 12.7055L5.2935 17.5043C5.60984 17.8207 6.03866 18 6.48506 18H11.5149C11.9613 18 12.3902 17.8207 12.7065 17.5043L17.5044 12.7055C17.8207 12.3891 18 11.9602 18 11.5137V6.48633C18 6.03984 17.8207 5.61094 17.5044 5.29453L12.7065 0.495703Z" />
    </IconWrapper>
  )
}

OctagonIcon.propTypes = propTypes

export default OctagonIcon
