/**
 * Components - Atoms - Button - Story
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../../.storybook/decorators/context'
import { SizeControl } from '../../../../../.storybook/decorators/size'

// UI
import { Button } from '../../button/button'
import { Space } from '../../../space/space'
import { THEME_CONTEXT } from '../../../../theme/constants/context'
import { THEME_SIZE } from '../../../../theme/constants/size'
import Readme from '../README.md'

export default {
  args: {
    block: false,
    center: false,
    content: 'Medium',
    context: THEME_CONTEXT.PRIMARY,
    dashed: false,
    disabled: false,
    endIcon: null,
    outline: false,
    shadow: false,
    size: THEME_SIZE.MD,
    startIcon: null
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl()
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Button'
}

export const main = (args) => {
  return (
    <>
      <Button {...args} content="Extra Small" size="xs" />
      <Space />
      <Button {...args} content="Small" size="sm" />
      <Space />
      <Button {...args} />
      <Space />
      <Button {...args} content="Large" size="lg" />
      <Space />
      <Button {...args} content={null} startIcon="user" size="sm" />
    </>
  )
}
