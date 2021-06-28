/**
 * List
 */

// React
import React from 'react'

// UI
import List from '../list'
import ListItem from '../listItem'
import Readme from '../README.md'

export default {
  component: List,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  subcomponents: { ListItem },
  title: 'Atoms/List'
}

export const main = (args) => (
  <List {...args}>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)
