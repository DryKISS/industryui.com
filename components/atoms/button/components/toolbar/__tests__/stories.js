/**
 * Button - Toolbar
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { ALIGN, arrayOfValues, ControlTypes, Button, ButtonToolbar, Icon, SIZE } from 'components'
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

const Children = ({ size }) => {
  return (
    <>
      <Button as='a' data-tip='Button' context='primary' key={1} onClick={() => {}} size={size}>
        <Icon icon='user' prefix='fas' style={{ pointerEvents: 'none' }} />
      </Button>
      <Button as='a' data-tip='Button' context='warning' key={2} onClick={() => {}} size={size}>
        <Icon icon='trash' prefix='fas' style={{ pointerEvents: 'none' }} />
      </Button>
    </>
  )
}

const BaseComponent = ({ ...args }) => {
  return (
    <ButtonToolbar {...args}>
      <Children size={args.size} />
    </ButtonToolbar>
  )
}
export const buttonToolbar = BaseComponent.bind({})
buttonToolbar.args = {
  align: ALIGN.Start,
  size: SIZE.MD
}
buttonToolbar.argTypes = {
  align: { control: { type: ControlTypes.Select, options: arrayOfValues(ALIGN) } },
  size: { control: { type: ControlTypes.Select, options: arrayOfValues(SIZE) } }
}
