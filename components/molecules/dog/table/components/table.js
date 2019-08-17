/**
 * Table Dogs
 */

// UI
import { DogName, Table } from '../../../'
import { Actions } from './actions'
import { Columns } from './columns'

export const TableDogs = ({ dogs, path }) =>
  <Table
    columns={Columns(
      (row) => <Actions path={path} row={row} />,
      (row) => <DogName row={row} />
    )}
    rows={dogs}
  />
