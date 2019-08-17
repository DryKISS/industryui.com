/**
 * Footer
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Footer, Image, List, ListItem } from '../../'
import Readme from './README.md'

// Data
import { FOOTER, ONE_COLUMN } from './__mocks__'

import logo from './__resources__/tailwise-icon.svg'

const renderColumn = () => (
  <>
    <div style={{ width: '32px' }}>
      <Image alt='Tailwise' src={logo} />
    </div>

    <List unstyled>
      <ListItem>Dog's best friend</ListItem>
      <ListItem>hello@tailwise.com</ListItem>
      <ListItem>0330 043 5301</ListItem>
    </List>
  </>
)

storiesOf('Organisms/Footer', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () => (
    <Footer
      copyright='{t.Footer.COPYRIGHT}'
      description='{t.Footer.DESCRIPTION}'
      info='{t.Footer.INFO}'
      columns={FOOTER(renderColumn)}
      termsAndContitions='{t.Footer.TERMS_AND_CONDITIONS}'
    />
  ))

  .add('12 Column', () => (
    <Footer
      copyright='{t.Footer.COPYRIGHT}'
      description='{t.Footer.DESCRIPTION}'
      info='{t.Footer.INFO}'
      columns={ONE_COLUMN}
      termsAndContitions='{t.Footer.TERMS_AND_CONDITIONS}'
    />
  ))
