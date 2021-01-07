/**
 * LIST
 */

// UI
import { List, ListItem } from 'components'
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

export const main = args => (
  <List {...args}>
    <ListItem>Item1</ListItem>
    <ListItem>Item2</ListItem>
    <ListItem>Item3</ListItem>
  </List>
)
