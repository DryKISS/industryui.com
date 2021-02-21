/**
 * Toggle - Components - Toggle
 */

// React
import React, { useState, useEffect } from 'react'
import { bool, func, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Switch } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'

export const Toggle = ({
  context,
  disabled,
  onToggle,
  size,
  toggled: initial
}) => {
  const [toggled, setToggled] = useState(initial)
  useEffect(() => {
    setToggled(initial)
  }, [initial])

  const handleToggle = () => {
    onToggle && onToggle(!toggled)
    setToggled(!toggled)
  }

  return (
    <StyledToggle>
      <Switch
        context={context}
        disabled={disabled}
        handleToggle={!disabled && handleToggle}
        size={size}
        toggled={toggled}
      />
    </StyledToggle>
  )
}

const StyledToggle = styled.div`
  display: inline-block;
  position: relative;
`

Toggle.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  disabled: bool,
  onToggle: func,
  size: oneOf(['sm', 'md', 'lg']),
  toggled: bool
}

Toggle.defaultProps = {
  context: 'success',
  size: 'md',
  toggled: false
}
