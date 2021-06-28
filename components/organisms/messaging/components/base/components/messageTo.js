/**
 * Messaging/Base/To
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import Image from '../../../../../atoms/image/image'

// Style
import styled from 'styled-components'

const MessageTo = ({ to }) => {
  let icon = ''

  switch (to) {
    case 'customer-supplier':
      icon = '/messaging/cs.svg'
      break
    case 'customer':
      icon = '/messaging/customer.svg'
      break
    case 'supplier':
      icon = '/messaging/supplier.svg'
      break
    default:
      icon = null
      break
  }

  return icon && <StyledImage alt="audience" src={icon} />
}

const StyledImage = styled(Image)`
  margin-right: 0.5rem;
  vertical-align: middle !important;
`

MessageTo.propTypes = {
  to: string.isRequired
}
export default MessageTo
