/**
 * Components - Organisms - Bar - Components - Bar
 */

// React
import { useState } from 'react'

// UI
import { BarOverlay } from './overlay'
import { BarToggle } from './toggle'
import { BarWrapper } from './wrapper'
import { BarPropTypes, BarDefaultProps } from './props'

// Style
import styled from 'styled-components'

export const Bar = ({ children, minSize, open, placement, variant, width, toggle }) => {
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
        {toggle && <BarToggle onClick={toggleOpen} open={IsOpen} placement={placement} />}
        <StyledContent open={IsOpen}>{children}</StyledContent>
      </BarWrapper>

      <BarOverlay
        onClick={toggleOpen}
        open={IsOpen}
        placement={placement}
        variant={variant}
        width={width}
      />
    </>
  )
}

const StyledContent = styled.div`
  display: ${({ open }) => !open && 'none'};
`

Bar.propTypes = BarPropTypes
Bar.defaultProps = BarDefaultProps
