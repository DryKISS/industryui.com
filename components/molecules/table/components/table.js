/**
 * Table
 */

// React
import React, { useState } from 'react'
import { array, bool, func, number, shape, string } from 'prop-types'

// UI
import { BACKGROUND, Pagination } from '../../../'

import { PaginationPropTypes } from '../../pagination/components/propTypes'

// Style
import styled, { css } from 'styled-components'

export const Table = ({
  align,
  caption,
  className,
  columns,
  hover,
  pagination,
  paginationProps: { perPage, ...otherPaginationProps },
  responsive,
  rowClick,
  rows,
  striped
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const handleClick = e => {
    e.preventDefault()
    const row = e.currentTarget.getAttribute('data-item')
    rowClick(JSON.parse(row))
  }

  const renderColumns = () => {
    return columns.map(({ hidden, text }, index) => {
      if (hidden) {
        return
      }

      return (
        <StyledTh align={align} key={index}>
          {text}
        </StyledTh>
      )
    })
  }

  const renderRows = () => {
    const clickable = typeof rowClick === 'function'

    const temp = pagination ? rows.slice((currentPage - 1) * perPage, currentPage * perPage) : rows

    return temp.map((row, index) => {
      const context = row.context
      delete row.context

      return (
        <StyledTr
          context={context}
          key={index}
          data-item={JSON.stringify(row)}
          hover={hover}
          onClick={clickable ? handleClick : null}
          pointer={clickable}
          striped={striped}
        >
          {Object.entries(row).map(([key, value], index) => {
            const length = columns.length
            const column = columns[index]

            if (length && column.hidden) {
              return
            }

            return (
              <StyledTd align={align} key={index}>
                {length > 0 && column.formatter ? (
                  column.formatter({ row }, column.formatterData)
                ) : value && value.__html ? (
                  <span dangerouslySetInnerHTML={value} />
                ) : (
                  value
                )}
              </StyledTd>
            )
          })}
        </StyledTr>
      )
    })
  }

  const renderTable = () => (
    <StyledTable className={className}>
      {caption && <StyledCaption>{caption}</StyledCaption>}
      <thead>
        <tr>{columns && renderColumns()}</tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </StyledTable>
  )

  return (
    <>
      {responsive && <StyledResponsive>{renderTable()}</StyledResponsive>}

      {!responsive && renderTable()}

      {pagination && rows.length > 0 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={page => setCurrentPage(page)}
          pageCount={Math.ceil(rows.length / perPage)}
          size='sm'
          style={{
            marginTop: '10px'
          }}
          {...otherPaginationProps}
        />
      )}
    </>
  )
}

const StyledResponsive = styled.div`
  background-color: #fff;
  display: block;
  width: 100%;
  overflow-x: auto;
`

const StyledTable = styled.table`
  background-color: ${({ theme }) => theme.COLOUR.transparent};
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.TABLE.fontSize};
  width: 100%;
`

const StyledTr = styled.tr`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'initial')};
  ${({ context, striped, theme }) =>
    !context &&
    striped &&
    css`
      :nth-child(odd) {
        background-color: ${theme.COLOUR.light};
      }
    `}

  ${props => props.context && BACKGROUND(props)}
  ${props =>
    props.context &&
    css`
      color: white;
    `}

  ${({ hover }) =>
    hover &&
    css`
      :hover {
        background-color: #eee;
      }
    `}
`

const StyledTh = styled.th`
  border-bottom: 2px solid ${({ theme }) => theme.COLOUR.dark};
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => (align ? 'center' : 'left')};
`

const StyledTd = styled.td`
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => align && 'center'};
`

const StyledCaption = styled.caption`
  caption-side: bottom;
  color: #6c757d;
  padding: ${({ theme }) => theme.TABLE.padding} 0;
  text-align: left;
`

Table.propTypes = {
  align: bool,
  caption: string,
  classname: string,
  columns: array,
  hover: bool,
  pagination: bool,
  paginationProps: shape({ perPage: number, ...PaginationPropTypes }),
  responsive: bool,
  rowClick: func,
  rows: array.isRequired,
  striped: bool
}

Table.defaultProps = {
  align: false,
  columns: [],
  className: 'Table',
  hover: true,
  pagination: false,
  paginationProps: {
    perPage: 10
  },
  responsive: true,
  striped: true
}
