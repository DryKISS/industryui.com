/**
 * Table - Formatter - Link
 * Standard cell link
 */

// UI
import { Link } from '../../../'

export const TableLink = ({ row }, data) => {
  return <Link to={row[data.to]}>{row[data.cell]}</Link>
}
