/**
 * Tags
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Tags from './'
import Readme from './README.md'

storiesOf('Molecules/Tags', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Tags tags={[]} />
    )
  )
