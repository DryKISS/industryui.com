/**
 * Link
 * Standard cell link
 */

// UI
import { Link } from '../../../'

export const TableLink = ({ row }, data) => {
  console.log(row)

  return (
    <Link to={row[data.to]}>
      <a>{row[data.cell]}</a>
    </Link>
  )
}
