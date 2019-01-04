/**
 * Article details
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { ArticleDetails } from '../../'
import Readme from './README.md'

storiesOf('Organisms/ArticleDetails', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ArticleDetails author='Ian Warner' />
    )
  )
