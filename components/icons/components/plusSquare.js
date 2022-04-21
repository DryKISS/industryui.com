// React
import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const PlusIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path
        d="M9.42857 5.57143V6.42857C9.42857 6.60536 9.28393 6.75 9.10714 6.75H6.75V9.10714C6.75 9.28393 6.60536 9.42857 6.42857 9.42857H5.57143C5.39464 9.42857 5.25 9.28393 5.25 9.10714V6.75H2.89286C2.71607 6.75 2.57143 6.60536 2.57143 6.42857V5.57143C2.57143 5.39464 2.71607 5.25 2.89286 5.25H5.25V2.89286C5.25 2.71607 5.39464 2.57143 5.57143 2.57143H6.42857C6.60536 2.57143 6.75 2.71607 6.75 2.89286V5.25H9.10714C9.28393 5.25 9.42857 5.39464 9.42857 5.57143ZM12 1.28571V10.7143C12 11.4241 11.4241 12 10.7143 12H1.28571C0.575893 12 0 11.4241 0 10.7143V1.28571C0 0.575893 0.575893 0 1.28571 0H10.7143C11.4241 0 12 0.575893 12 1.28571ZM10.7143 10.5536V1.44643C10.7143 1.35804 10.642 1.28571 10.5536 1.28571H1.44643C1.35804 1.28571 1.28571 1.35804 1.28571 1.44643V10.5536C1.28571 10.642 1.35804 10.7143 1.44643 10.7143H10.5536C10.642 10.7143 10.7143 10.642 10.7143 10.5536Z"
        fill="#999999"
      />
    </IconWrapper>
  )
}

PlusIcon.propTypes = propTypes

export default PlusIcon
