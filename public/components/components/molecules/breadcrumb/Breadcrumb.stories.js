import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Breadcrumb from './'
import Readme from './README.md'

storiesOf('Molecules/Breadcrumb', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Breadcrumb
        category='Ian Warner'
        page='Home'
        path='/'
      />
    )
  )
