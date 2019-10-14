/**
 * Footer
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Footer, Image, List, ListItem } from '../../../'
import Readme from '../README.md'

// Data
import { FOOTER, ONE_COLUMN } from '../__mocks__'
import logo from '../__resources__/tailwise-icon.svg'

const renderColumn = () => (
  <>
    <Image alt='Tailwise' src={logo} />

    <List unstyled>
      <ListItem>Strapline</ListItem>
      <ListItem>email@domain.com</ListItem>
      <ListItem>0201 1234 1234</ListItem>
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
    <Footer columns={FOOTER(renderColumn)} />
  ))

  .add('12 Column', () => (
    <Footer columns={ONE_COLUMN} />
  ))
