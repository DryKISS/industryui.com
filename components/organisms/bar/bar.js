/**
 * Components - Organisms - Bar - Components - Bar
 */

// React
import React, { useState } from 'react'

// Style
import styled from 'styled-components'

// UI
import BarOverlay from './components/overlay'
import BarToggle from './components/toggle'
import BarWrapper from './components/wrapper'
import propTypes from './components/props/propTypes'
import defaultProps from './components/props/defaultProps'

const Bar = ({ children, minSize, open, placement, toggle, backdrop, variant, width }) => {
  const [IsOpen, setIsOpen] = useState(open ?? true)

  const toggleOpen = () => {
    setIsOpen(!IsOpen)
  }

  return (
    <>
      <BarWrapper
        open={IsOpen}
        placement={placement}
        variant={variant}
        width={width}
        minSize={minSize}
      >
        {toggle && (
          <BarToggle onClick={toggleOpen} open={IsOpen} placement={placement} barWidth={width} />
        )}
        <StyledContent open={IsOpen}>{children}</StyledContent>
      </BarWrapper>

      {backdrop && (
        <BarOverlay
          onClick={toggleOpen}
          open={IsOpen}
          placement={placement}
          variant={variant}
          width={width}
        />
      )}
    </>
  )
}

const StyledContent = styled.div`
  display: ${({ open }) => !open && 'none'};
`

Bar.propTypes = propTypes
Bar.defaultProps = defaultProps

export default Bar
