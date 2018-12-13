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
import { List } from '../../'
import { Image } from '../../'
import Readme from './README.md'
// Data
import { FOOTER } from './__mocks__'

import logo from './__resources__/tailwise-icon.svg'

const renderColumn = () => (
  <React.Fragment>
    <div style={{ width: '32px' }}>
      <Image alt='Tailwise' src={logo} />
    </div>

    <List unstyled>
      <List.Item>Dog's best friend</List.Item>
      <List.Item>hello@tailwise.com</List.Item>
      <List.Item>0330 043 5301</List.Item>
    </List>
  </React.Fragment>
)

storiesOf('Organisms/Footer', module)
  .addDecorator(withReadme(Readme))

  .add('Default', withInfo()(() => (
    <Footer
      copyright='{t.Footer.COPYRIGHT}'
      description='{t.Footer.DESCRIPTION}'
      info='{t.Footer.INFO}'
      columns={FOOTER(renderColumn)}
      termsAndContitions='{t.Footer.TERMS_AND_CONDITIONS}'
    />
  )))
