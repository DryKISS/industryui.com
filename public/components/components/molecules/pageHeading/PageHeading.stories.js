/**
 * Page Heading
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import PageHeading from '../../'
import Readme from './README.md'

storiesOf('Molecules/PageHeading', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <PageHeading />
    )
  )
