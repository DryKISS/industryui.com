/**
 * LIST
 */

// React
import React from 'react'

import { withKnobs, boolean, object } from '@storybook/addon-knobs'

import { List, ListItem } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Atoms/List',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <List>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)

export const group = () => (
  <List group>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)

export const border = () => (
  <List border>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)

export const flush = () => (
  <List flush>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)

export const knobbed = () => (
  <List
    border={boolean('border', false)}
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
