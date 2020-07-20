/**
 * Tooltip
 */

// React
import React from 'react'

// Storybook
import { Context, Wrapper } from 'decorators'

// UI
import { Button, Tooltip } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const defaultProps = {
    content: 'Hovered',
    context: Context()
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
