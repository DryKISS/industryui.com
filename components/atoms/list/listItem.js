/**
 * List Item
 */
import { node } from 'prop-types'

export const ListItem = ({ children }) =>
  <li>
    {children}
  </li>

ListItem.propTypes = {
  children: node.isRequired
}
