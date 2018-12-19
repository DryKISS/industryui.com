/**
 * LIST
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs/react'

import { List, ListItem } from '../../'
import Readme from './README.md'

storiesOf('Atoms/List', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('default', withInfo()(() =>
    <List>
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
  )

  .add('knobbed', withInfo()(() =>
    <List
      unstyled={boolean('Unstyled', false)}
      inline={boolean('inline', false)}
      style={object('Style', { listStyleType: 'lower-greek' })}
    >
      <ListItem>Item1</ListItem>
      <ListItem>Item2</ListItem>
      <ListItem>Item3</ListItem>
    </List>
  )
  )

