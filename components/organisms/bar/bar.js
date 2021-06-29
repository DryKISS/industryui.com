/**
 * Components - Organisms - Bar - Components - Bar
 */

// React
import React, { useState } from 'react'

// UI
import BarOverlay from './components/overlay'
import BarToggle from './components/toggle'
import BarWrapper from './components/wrapper'
import { BarPropTypes, BarDefaultProps } from './props'

// Style
import styled from 'styled-components'

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

Bar.propTypes = BarPropTypes
Bar.defaultProps = BarDefaultProps
export default Bar
