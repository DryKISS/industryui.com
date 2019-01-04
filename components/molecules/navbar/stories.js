/**
 * Navbar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Navbar } from '../../'
import Readme from './README.md'

// Data
import { NAVIGATION } from './__mocks__/links'
import SVG from './__resources__/tailwise-logo.svg'

storiesOf('Molecules/Navbar', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Navbar
        brand={SVG}
        links={NAVIGATION}
      />
    )
  )
