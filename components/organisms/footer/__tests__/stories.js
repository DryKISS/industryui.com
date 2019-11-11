/**
 * Footer
 */

// React
import React from 'react'

// UI
import { Footer, Image, List, ListItem } from 'components'
import Readme from '../README.md'

// Data
import { FOOTER, ONE_COLUMN } from '../__mocks__'
import logo from '../__resources__/tailwise-icon.svg'

export const renderColumn = () => (
  <>
    <Image alt='Tailwise' src={logo} />

    <List unstyled>
      <ListItem>Strapline</ListItem>
      <ListItem>email@domain.com</ListItem>
      <ListItem>0201 1234 1234</ListItem>
    </List>
  </>
)

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Footer columns={FOOTER(renderColumn)} />

export const _12Column = () => <Footer columns={ONE_COLUMN} />
