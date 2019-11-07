/**
 * Alert
 */

// React
import { useState } from 'react'
import { func, object, objectOf, number, oneOf, oneOfType, string } from 'prop-types'

// UI
import { BACKGROUND, Close, CONTEXT, SHADE_COLOUR } from '../../../'
import { AlertContent, AlertHeader } from './'

// Style
import styled from 'styled-components'

export const Alert = ({ className, close, content, context, header, icon, iconPrefix }) => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
    close && close()
  }

  return (
    visible && (
      <StyledAlert className={className} context={context}>
        {close && (
          <StyledClose click={handleClose} context={header ? 'white' : 'dark'} icon='times' />
        )}
        {header && (
          <AlertHeader context={context} header={header} icon={icon} iconPrefix={iconPrefix} />
        )}
        <AlertContent
          content={content}
          context={context}
          icon={header ? null : icon}
          iconPrefix={iconPrefix}
        />
      </StyledAlert>
    )
  )
}

const StyledAlert = styled.div`
  ${props => BACKGROUND(props)};
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  border-radius: 0.25rem;
  color: ${({ context, theme }) => SHADE_COLOUR(theme.COLOUR[context], -80)};
  margin: 1rem 0;
  position: relative;
`

const StyledClose = styled(Close)`
  margin: 0;
  position: absolute;
  right: 0;
  top: 8px;
`

Alert.propTypes = {
  close: func,
  content: oneOfType([object, string]).isRequired,
  context: oneOf(Object.values(CONTEXT)),
  header: string,
  icon: string,
  iconPrefix: string,
  style: objectOf(oneOfType([number, string]))
}

Alert.defaultProps = {
  context: 'primary'
}
