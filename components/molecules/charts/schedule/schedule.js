/**
 * Components - Molecules - Charts - Schedule
 */

// React
import React from 'react'
import { array, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { formatPrice } from '../../../utils/formatPrice/index'
import { Icon } from '../../../atoms/icon/icon/icon'
import { shadeLinearRgb } from '../../../utils/colour/colour'
import { Table } from '../../../molecules/table/components/wrapper'
import { Text } from '../../../atoms/text/text'
import { Tooltip } from '../../../atoms/tooltip/tooltip'

const FormatCell = (handleClick, month, row) => {
  return row[month][0] || row[month] ? (
    row[month][2] ? (
      <Tooltip content={row[month][2]}>
        <Wrapper
          context={row[month][1] ? row[month][1] : 'light'}
          count={row[month][0] || row[month]}
          onClick={(e) => (row[month][0] > 0 || row[month] > 0) && handleClick({ e, row })}
        >
          {row[month][0] ? row[month][0] : row[month]}
        </Wrapper>
      </Tooltip>
    ) : (
      <Wrapper
        context={row[month][1] ? row[month][1] : 'light'}
        count={row[month][0] || row[month]}
        onClick={(e) => (row[month][0] > 0 || row[month] > 0) && handleClick({ e, row })}
      >
        {row[month][0] ? row[month][0] : row[month]}
      </Wrapper>
    )
  ) : (
    '0'
  )
}

const FormatTask = ({ row }) => {
  return (
    <>
      <Text size="sm">
        {row.compliance && <Icon context="info" icon="clipboard-check" />}
        {row.task}
      </Text>
      {row.costCustomer && <Text size="xs">Customer: {formatPrice(row.costCustomer)}</Text>}
      {row.costSupplier && <Text size="xs">Supplier: {formatPrice(row.costSupplier)}</Text>}
    </>
  )
}

export const columns = (handleClick) => [
  {
    hidden: true
  },
  {
    formatter: FormatTask,
    text: '2021'
  },
  {
    hidden: true
  },
  {
    text: 'Count'
  },
  {
    hidden: true
  },
  {
    hidden: true
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'jan', row),
    text: 'Jan'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'feb', row),
    text: 'Feb'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'mar', row),
    text: 'Mar'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'apr', row),
    text: 'Apr'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'may', row),
    text: 'May'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'jun', row),
    text: 'Jun'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'jul', row),
    text: 'Jul'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'aug', row),
    text: 'Aug'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'sep', row),
    text: 'Sep'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'oct', row),
    text: 'Oct'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'nov', row),
    text: 'Nov'
  },
  {
    formatter: ({ row }) => FormatCell(handleClick, 'dec', row),
    text: 'Dec'
  }
]

export const Schedule = ({ data, handleClick, handleRowClick }) => {
  return (
    <Table align="center" columns={columns(handleClick)} rowClick={handleRowClick} rows={data} />
  )
}

const Wrapper = styled.div`
  align-items: center;
  color: ${({ context, theme }) => (context !== 'light' ? theme.COLOUR.white : theme.COLOUR.dark)};
  background: ${({ context, theme }) => theme.COLOUR[context]};
  border-radius: 10px;
  cursor: ${({ count, theme }) => count > 0 && 'pointer'};
  display: flex;
  height: 3rem;
  justify-content: center;
  text-shadow: 1px 2px 2px #bbb;
  width: 3rem;

  &:hover {
    background-color: ${({ context, count, theme: { COLOUR } }) =>
      count > 0 && shadeLinearRgb(-0.1, COLOUR[context])};
  }
`

Schedule.propTypes = {
  data: array.isRequired,
  handleClick: func,
  handleRowClick: func
}
