/**
 * Components - Molecules - Alert - Components - Header
 */

// React
import React from 'react'
import { oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import shadeLinearRgb from '../../../utils/colour/shadeLinearRgb'
import Icon from '../../../atoms/icon/icon/icon'
import THEME_CONTEXT from '../../../constants/context'

const AlertHeader = ({ context, header, icon, iconPrefix }) => (
  <StyledHeader context={context}>
    {icon && <Icon aria-hidden="true" context="help" icon={icon} prefix={iconPrefix} />} {header}
  </StyledHeader>
)

const StyledHeader = styled.div`
  background: ${({ context, theme }) => shadeLinearRgb(-0.4, theme.COLOUR[context])};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5rem 1.25rem;
`

AlertHeader.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  header: string.isRequired,
  icon: string,
  iconPrefix: string
}

export default AlertHeader
