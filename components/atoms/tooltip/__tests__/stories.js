/**
 * Tooltip
 */

// React
import React from 'react'

// Storybook
import { Context, Wrapper } from 'decorators'

// Styled Components
import styled from 'styled-components'

// UI
import { Button, Text, Tooltip } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const SampleTooltip = () => (
  <StyledWrapper>
    <Text content='Tooltip' context='white' />
    <Text content='Note' context='dark' />
  </StyledWrapper>
)

const BaseComponent = props => {
  const defaultProps = {
    content: 'Hovered',
    context: Context('tooltip', 'black'),
    ...props
  }

  return (
    <>
      <Tooltip {...defaultProps}>
        <Button content='Hover over me' />
      </Tooltip>
    </>
  )
}

export const main = () => <BaseComponent />

export const withJsx = () => <BaseComponent content={<SampleTooltip />} />

const StyledWrapper = styled.div`
  text-align: center;
`
