/**
 * Image
 */

// React
import React from 'react'

// Stroybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Image from './'
import Readme from './README.md'

storiesOf('Atoms/Image', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Image alt='Ian Warner' src='http://via.placeholder.com/350x150' />
    )
  )
