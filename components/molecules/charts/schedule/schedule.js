/**
 * Components - Molecules - Charts - Schedule
 */

// React
import React from 'react'
import { array, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import formatPrice from '../../../utils/formatPrice/formatPrice'
import Icon from '../../../atoms/icon/icon/icon'
import { shadeLinearRgb } from '../../../utils/colour/colour'
import Space from '../../../atoms/space/space'
import Table from '../../../molecules/table/table'
import Text from '../../../atoms/text/text'
import Tooltip from '../../../atoms/tooltip/tooltip'
import Pagination from '../../../molecules/pagination/pagination'

const formatCell = (handleClick, month, row, otherData) => {
  return row[month][0] || row[month] ? (
    row[month][2] ? (
      <Tooltip content={row[month][2]}>
        <Wrapper
          context={row[month][1] ? row[month][1] : 'light'}
          count={row[month][0] || row[month]}
          onClick={(e) =>
            (row[month][0] > 0 || row[month] > 0) && handleClick({ e, month, row }, otherData)
          }
        >
          {row[month][0] ? row[month][0] : row[month]}
        </Wrapper>
      </Tooltip>
    ) : (
      <Wrapper
        context={row[month][1] ? row[month][1] : 'light'}
        count={row[month][0] || row[month]}
        onClick={(e) =>
          (row[month][0] > 0 || row[month] > 0) && handleClick({ e, month, row }, otherData)
        }
      >
        {row[month][0] ? row[month][0] : row[month]}
      </Wrapper>
    )
  ) : (
    '0'
  )
}

const formatTask = ({ row }) => {
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

export const columns = (handleClick, currentYear) => [
  {
    hidden: true
  },
  {
    formatter: formatTask,
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
    formatter: ({ row }) => formatCell(handleClick, 'jan', row, { month: 1, year: currentYear }),
    text: 'Jan'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'feb', row, { month: 2, year: currentYear }),
    text: 'Feb'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'mar', row, { month: 3, year: currentYear }),
    text: 'Mar'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'apr', row, { month: 4, year: currentYear }),
    text: 'Apr'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'may', row, { month: 5, year: currentYear }),
    text: 'May'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'jun', row, { month: 6, year: currentYear }),
    text: 'Jun'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'jul', row, { month: 7, year: currentYear }),
    text: 'Jul'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'aug', row, { month: 8, year: currentYear }),
    text: 'Aug'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'sep', row, { month: 9, year: currentYear }),
    text: 'Sep'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'oct', row, { mmonth: 10, year: currentYear }),
    text: 'Oct'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'nov', row, { mmonth: 11, year: currentYear }),
    text: 'Nov'
  },
  {
    formatter: ({ row }) => formatCell(handleClick, 'dec', row, { mmonth: 12, year: currentYear }),
    text: 'Dec'
  }
]

export const Schedule = ({
  data,
  handleClick,
  handleRowClick,
  onYearChange,
  currentYear,
  yearRange
}) => {
  return (
    <>
      <Table
        align="center"
        columns={columns(handleClick, currentYear)}
        hover={false}
        rowClick={handleRowClick}
        rows={data}
      />
      {yearRange && (
        <>
          <Space marginTop="sm">
            <Pagination
              pageCount={yearRange.length}
              pageRange={yearRange}
              currentPage={currentYear}
              onPageChange={onYearChange}
              context={'primary'}
            ></Pagination>
          </Space>
        </>
      )}
    </>
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
  margin: auto;
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

export default Schedule
