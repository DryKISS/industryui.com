/**
 * Footer
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Footer } from '../../'
import Readme from './README.md'

// Data
import { ROWS } from './__mocks__'

storiesOf('Organisms/Footer', module)
  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Footer
        copyright='{t.Footer.COPYRIGHT}'
        description='{t.Footer.DESCRIPTION}'
        info='{t.Footer.INFO}'
        rows={ROWS}
        termsAndContitions='{t.Footer.TERMS_AND_CONDITIONS}'
      />
    )
  )
