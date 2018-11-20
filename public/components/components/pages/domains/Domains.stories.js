/**
 * Domains
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Domains from './'
import Readme from './README.md'

storiesOf('Pages/Domains', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Domains />
    )
  )
