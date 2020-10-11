/**
 * LIST
 */

// UI
import { List, ListItem } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/List',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
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
  <List>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)
