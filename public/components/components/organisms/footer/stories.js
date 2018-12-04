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
import Footer from '../../'
import Readme from './README.md'

// Data
import defaultRows from './__mocks__/footer'

storiesOf('Organisms/Footer', module)
  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Footer
        copyright='{t.Footer.COPYRIGHT}'
        description='{t.Footer.DESCRIPTION}'
        info='{t.Footer.INFO}'
        rows={defaultRows}
        termsAndContitions='{t.Footer.TERMS_AND_CONDITIONS}'
      />
    )
  )
