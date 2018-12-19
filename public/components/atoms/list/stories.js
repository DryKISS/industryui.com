/**
 * LIST
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import { List, ListItem } from '../../'
import Readme from './README.md'

storiesOf('Atoms/List', module)

  .addDecorator(withReadme(Readme))

  .add('default', withInfo()(() =>
    <List>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
  )

  .add('inline', withInfo()(() =>
    <List inline>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
  )

  .add('unstyled', withInfo()(() =>
    <List unstyled>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
  )

  .add('custom styled', withInfo()(() =>
    <List style={{ listStyleType: 'lower-greek' }}>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
  )
