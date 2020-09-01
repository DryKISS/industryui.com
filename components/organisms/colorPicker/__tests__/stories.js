/**
 * Big Calendar
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'
import { select } from '@storybook/addon-knobs'

// UI
import { ColorPicker } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Color Picker',
  components: ColorPicker,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const type = 'Circle'
export const main = () => {
  const defaultProps = {
    type: select(
      'Type',
      {
        Circle: 'circle',
        Sketch: 'sketch',
        Github: 'github',
        Twitter: 'twitter'
      },
      'sketch'
    ),
    color: select(
      'Color',
      {
        Red: 'red',
        Blue: 'blue',
        Green: 'green',
        Orange: 'orange'
      },
      'red'
    )
  }

  return <ColorPicker type={type} {...defaultProps} />
}
