/**
 * Footer
 */

// React
import React, { Fragment } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Footer, Image, List, ListItem } from 'components'
import Readme from '../README.md'

// Data
import { Figma, FOOTER, ONE_COLUMN } from '../__mocks__'

export default {
  title: 'Organisms/Footer',
  component: Footer,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    columns: Figma,
    ...props
  }

  return <Footer {...defaultProps} />
}

export const main = () => <BaseComponent />
export const footer = () => <BaseComponent columns={FOOTER(renderColumn)} />

export const renderColumn = index => (
  <Fragment key={index}>
    <Image alt='Tailwise' src='/drykiss.svg' />

    <List unstyled>
      <ListItem>Strapline</ListItem>
      <ListItem>email@domain.com</ListItem>
      <ListItem>0201 1234 1234</ListItem>
    </List>
  </Fragment>
)

export const _12Column = () => <Footer columns={ONE_COLUMN} />
