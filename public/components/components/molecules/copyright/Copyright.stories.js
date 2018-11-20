/**
 * Copyright
 */

// React
import React from 'react'

// Stroybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import Copyright from './'
import Readme from './README.md'

// Data
import COPYRIGHT from './__mocks__/copyright'

storiesOf('Molecules/Copyright', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Copyright
        brand='Compnay Name'
        links={COPYRIGHT}
      />
    )
  )
