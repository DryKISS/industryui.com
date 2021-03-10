/**
 * Components - Molecules - Alert - Components - Alert
 */

// React
import React, { useState } from 'react'
import { func, object, objectOf, number, oneOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { AlertContent } from './content'
import { AlertHeader } from './header'

import { Close, shadeLinearRgb } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import { themeBackground } from '../../../theme/utils/background'

export const Alert = ({ className, close, content, context, header, icon, iconPrefix, style }) => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
    close && close()
  }

  return (
    visible && (
      <StyledAlert className={className} context={context} style={style}>
        {close && <StyledClose click={handleClose} context="white" header={header} icon="times" />}

        {header && (
          <AlertHeader context={context} header={header} icon={icon} iconPrefix={iconPrefix} />
        )}

        <AlertContent content={content} icon={header ? null : icon} iconPrefix={iconPrefix} />
      </StyledAlert>
    )
  )
}

const StyledAlert = styled.div`
  ${(props) => themeBackground(props)}
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  border-radius: 0.25rem;
  color: ${({ context, theme }) => shadeLinearRgb(-0.8, theme.COLOUR[context])};
  position: relative;
`

const StyledClose = styled(Close)`
  margin: 0;
  position: absolute;
  right: 0;
  top: ${({ header }) => (header ? '0' : '4px')};
`

Alert.propTypes = {
  close: func,
  content: oneOfType([object, string]).isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  header: string,
  icon: string,
  iconPrefix: string,
  style: objectOf(oneOfType([number, string])),
}

Alert.defaultProps = {
  context: 'primary',
}
