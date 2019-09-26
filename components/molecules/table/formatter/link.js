/**
 * Link
 * Standard cell link
 */

// UI
import { Link } from '../../../'

export const TableLink = ({ link, path, query, row }) => {
  return (
    <Link to={{
      href: {
        pathname: path,
        query: query
      }
    }}
    >
      <a>{link}</a>
    </Link>
  )
}
