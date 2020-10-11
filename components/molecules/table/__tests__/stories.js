/**
 * Table
 */

// Storybook
import { boolean, number, text } from '@storybook/addon-knobs'

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
    align: boolean('Align', props.align || false),
    caption: text('Caption', props.caption || ''),
    className: text('Class name', props.className || ''),
    columns: columns,
    fullHeight: boolean('Full height', props.fullHeight || false),
    hover: boolean('Hover', props.hover || false),
    loading: boolean('Loading', props.loading || false),
    pagination: boolean('Pagination', props.pagination || true),
    paginationProps: {
      changeUrlOnChange: boolean('Change URL', props.changeUrlOnChange || false),
      initialPage: number('Initial page', props.initialPage || 1),
      perPage: number('Per page', props.perPage || 10)
    },
    responsive: boolean('Responsive', props.responsive || true),
    rows: props.rows || [
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data,
      ...rows.data
    ],
    striped: boolean('Striped', props.striped || false),
    ...props
  }

  if (props.columns === false || props.columns === null) {
    delete defaultProps.columns
  }

  return <Table {...defaultProps} />
}

export const main = () => <BaseComponent />
export const caption = () => <BaseComponent caption='Captioned Tabled' />
export const context = () => <BaseComponent rows={dataContext} />

export const responsive = () => (
  <div style={{ width: '250px' }}>
    <BaseComponent />
  </div>
)

export const striped = () => <BaseComponent striped />
export const Hover = () => <BaseComponent hover />
export const noColumns = () => <BaseComponent columns={false} rows={noCols} />
export const rowClickStory = () => <BaseComponent rowClick={rowClick} />
export const align = () => <BaseComponent align />
export const formatter = () => <BaseComponent columns={columnsFormatter} />
export const actions = () => <BaseComponent columns={columnsActions} />
export const withPagination = () => <BaseComponent columns={columnsActions} pagination />
export const loading = () => <BaseComponent loading />
export const loadingWithoutData = () => <BaseComponent rows={[]} loading />
export const showNoData = () => <BaseComponent rows={[]} />
