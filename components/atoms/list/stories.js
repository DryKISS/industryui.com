/**
 * LIST
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, object } from '@storybook/addon-knobs/react'

import { List, ListItem } from '../../'
import Readme from './README.md'

storiesOf('Atoms/List', module)

  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('default', () =>
    <List>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )

  .add('knobbed', () =>
    <List
      unstyled={boolean('Unstyled', false)}
      inline={boolean('inline', false)}
      style={object('Style', { color: 'blue', listStyleType: 'lower-greek' })}
    >
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
