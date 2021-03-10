/**
 * Components - Atoms - Text - Story
 */

// React
import React from 'react'

// Stroybook
import { ControlTypes } from '../../../../.storybook/decorators'

// UI
import { Text } from '../text'
import { THEME_ALIGN } from '../../../theme/constants/align'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import { THEME_SIZE } from '../../../theme/constants/size'

export default {
  args: {
    align: 'start',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
    galley of type and scrambled it to make a type specimen book. It has survived not only five
    centuries`,
    context: THEME_CONTEXT.DARK,
    size: THEME_SIZE.MD,
  },
  argTypes: {
    align: {
      control: {
        type: ControlTypes.Select,
        options: Object.values(THEME_ALIGN),
      },
    },
    context: {
      control: {
        type: ControlTypes.Select,
        options: Object.values(THEME_CONTEXT),
      },
    },
    size: {
      control: {
        type: ControlTypes.Select,
        options: Object.values(THEME_SIZE),
      },
    },
  },
  component: Text,
  title: 'Atoms/Text',
}

export const main = (args) => {
  return <Text {...args} />
}
