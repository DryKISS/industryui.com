/**
 * Table Component
 */

// React
import { array, func, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Table = ({ className, columns, rowClick, rows }) => {
  const renderColumns = () => {
    return (
      columns.map(({ formatter, hidden, text }, index) => {
        if (hidden) {
          return
        }

        return (
          <StyledTh key={index}>{text}</StyledTh>
        )
      })
    )
  }

  /**
   * Render Rows
   * Also check to see if columns have a formatter for the defined row
   */
  const renderRows = () => {
    return (
      rows.map((row, index) =>
        <StyledTr
          key={index}
          onClick={rowClick(row)}
          pointer={typeof rowClick() === 'function'}
        >

          {Object.entries(row).map(([key, value], index) => {
            if ((columns && columns.length) && columns[index].hidden) {
              return
            }

            return (
              <StyledTd key={index}>
                {(columns && columns.length > 0) && columns[index].formatter
                  ? columns[index].formatter(value)
                  : value.__html ? <span dangerouslySetInnerHTML={value} /> : value
                }
              </StyledTd>
            )
          })}

        </StyledTr>
      )
    )
  }

  const StyledTable = styled.table`
  background-color: transparent;
  border-collapse: collapse;
  margin-bottom: 1rem;
  width: 100%;
`

  const StyledTr = styled.tr`
    cursor: ${props => props.pointer ? 'pointer' : 'initial'}
    :nth-child(odd) {
      background-color: #eee;
    }

    :hover {
      background-color: #ddd;
    }
  `

  const StyledTh = styled.th`
    border-bottom: 2px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    padding: .75rem;
    text-align: inherit;
    vertical-align: bottom;
  `

  const StyledTd = styled.td`
    border-top: 1px solid #dee2e6;
    padding: .75rem;
    vertical-align: top;
  `

  return (
    <StyledTable className={className}>
      <thead><tr>{columns && renderColumns()}</tr></thead>
      <tbody>{renderRows()}</tbody>
    </StyledTable>
  )
}

Table.ropTypes = {
  classname: string,
  columns: array.isRequired,
  rowClick: func,
  rows: array.isRequired
}

Table.defaultProps = {
  className: 'Table',
  rowClick: () => {}
}
