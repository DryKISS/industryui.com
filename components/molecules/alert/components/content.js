/**
 * Components - Molecules - Alert - Components - Content
 */

// React
import React from 'react'
import { object, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Icon } from '../../../atoms/icon/icon/icon'

export const AlertContent = ({ content, icon, iconPrefix }) => (
  <StyledAlertContent>
    {icon && <Icon aria-hidden="true" context="help" icon={icon} prefix={iconPrefix} />}
    {content}
  </StyledAlertContent>
)

const StyledAlertContent = styled.div`
  padding: 0.75rem 1.25rem;
`

AlertContent.propTypes = {
  content: oneOfType([object, string]).isRequired,
  icon: string,
  iconPrefix: string
}
