/**
 * Table
 */

// UI
import { Table } from 'components'
import Readme from '../README.md'

// Data
import {
  columns,
  columnsActions,
  columnsFormatter,
  noCols,
  rowClick,
  rows,
  rowsContext
} from '../__mocks__/default'

const dataContext = rowsContext.data

export default {
  args: {
    align: false,
    caption: '',
    className: '',
    fullHeight: false,
    hover: false,
    loading: false,
    pagination: true,
    changeUrlOnChange: false,
    initialPage: 1,
    perPage: 10,
    responsive: true,
    striped: false
  },
  component: Table,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Table'
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    columns: columns,

    paginationProps: {
      changeUrlOnChange: props.changeUrlOnChange,
      initialPage: props.initialPage,
      perPage: props.perPage
    },

    rows: props.rows || [
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data
    ],

    ...props
  }

  if (props.columns === false || props.columns === null) {
    delete defaultProps.columns
  }

  return <Table {...defaultProps} />
}

export const main = args => <BaseComponent {...args} />

export const context = args => <BaseComponent {...args} rows={dataContext} />

export const responsive = args => (
  <div style={{ width: '250px' }}>
    <BaseComponent {...args} />
  </div>
)

export const noColumns = args => <BaseComponent {...args} columns={false} rows={noCols} />
export const rowClickStory = args => <BaseComponent {...args} rowClick={rowClick} />
export const formatter = args => <BaseComponent {...args} columns={columnsFormatter} />
export const actions = args => <BaseComponent {...args} columns={columnsActions} />
export const withPagination = args => (
  <BaseComponent {...args} columns={columnsActions} pagination />
)
export const loadingWithoutData = args => <BaseComponent {...args} rows={[]} loading />
export const showNoData = args => <BaseComponent {...args} rows={[]} />
