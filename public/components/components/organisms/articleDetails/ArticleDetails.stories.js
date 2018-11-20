/**
 * Article details
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import ArticleDetails from './'
import Readme from './README.md'

storiesOf('Organisms/ArticleDetails', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ArticleDetails author='Ian Warner' />
    )
  )
