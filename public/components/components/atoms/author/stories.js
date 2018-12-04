/**
 * Author
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import Author from '../../'
import Readme from './README.md'

storiesOf('Atoms/Author', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Author author='Ian Warner' />
    )
  )
