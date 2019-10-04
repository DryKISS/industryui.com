/**
 * LIST
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, object } from '@storybook/addon-knobs'

import { List, ListItem } from '../../'
import Readme from './README.md'

storiesOf('Atoms/List', module)

  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <List>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )

  .add('Group', () =>
    <List group unstyled>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )

  .add('Flush', () =>
    <List flush group unstyled>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )

  .add('Knobbed', () =>
    <List
      flush={boolean('flush', false)}
      group={boolean('group', false)}
      unstyled={boolean('unstyled', false)}
      inline={boolean('inline', false)}
      style={object('Style', { color: 'blue', listStyleType: 'lower-greek' })}
    >
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
