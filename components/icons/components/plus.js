import React from 'react'
import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const PlusIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path d="M15.7857 6.67857H10.3214V1.21429C10.3214 0.543772 9.77766 0 9.10714 0H7.89286C7.22234 0 6.67857 0.543772 6.67857 1.21429V6.67857H1.21429C0.543772 6.67857 0 7.22234 0 7.89286V9.10714C0 9.77766 0.543772 10.3214 1.21429 10.3214H6.67857V15.7857C6.67857 16.4562 7.22234 17 7.89286 17H9.10714C9.77766 17 10.3214 16.4562 10.3214 15.7857V10.3214H15.7857C16.4562 10.3214 17 9.77766 17 9.10714V7.89286C17 7.22234 16.4562 6.67857 15.7857 6.67857Z" />
    </IconWrapper>
  )
}

export default PlusIcon

PlusIcon.propTypes = propTypes
