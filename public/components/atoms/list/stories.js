/**
 * LIST
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import List from '../../'
import Readme from './README.md'

storiesOf('Atoms/List', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <List inline unstyled>
        <List.Item>ITEM</List.Item>
      </List>
    )
  )
