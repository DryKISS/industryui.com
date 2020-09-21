/**
 * Button - Toolbar
 */

// React
import React from 'react'

// Storybook
import { Align, Size, Wrapper } from 'decorators'

// UI
import { Button, ButtonToolbar, Icon } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Button/Toolbar',
  decorators: [Wrapper],
  component: ButtonToolbar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const Children = () => {
  return (
    <>
      <Button as='a' data-tip='Button' context='primary' key={1} onClick={() => {}} size={Size()}>
        <Icon icon='edit' prefix='fad' style={{ pointerEvents: 'none' }} />
      </Button>
      <Button as='a' data-tip='Button' context='warning' key={2} onClick={() => {}} size={Size()}>
        <Icon icon='trash' prefix='fad' style={{ pointerEvents: 'none' }} />
      </Button>
    </>
  )
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    align: Align(),
    children: Children(),
    ...props
  }

  return <ButtonToolbar {...defaultProps} />
}

export const main = () => <BaseComponent />
