/**
 * Table
 */

// React
import { array, func, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Table = ({ center, className, columns, rowClick, rows }) => {
  const handleClick = (e) => {
    const row = e.currentTarget.getAttribute('data-item')
    rowClick(JSON.parse(row))
  }

  const renderColumns = () => {
    return (
      columns.map(({ formatter, hidden, text }, index) => {
        if (hidden) {
          return
        }

        return (
          <StyledTh center={center} key={index}>{text}</StyledTh>
        )
      })
    )
  }

  const renderRows = () => {
    return (
      rows.map((row, index) =>
        <StyledTr
          key={index}
          data-item={JSON.stringify(row)}
          onClick={handleClick}
          pointer={typeof rowClick === 'function'}
        >
          {Object.entries(row).map(([key, value], index) => {
            if ((columns && columns.length) && columns[index].hidden) {
              return
            }

            return (
              <StyledTd center={center} key={index}>
                {(columns && columns.length > 0) && columns[index].formatter
                  ? columns[index].formatter(row)
                  : value && value.__html ? <span dangerouslySetInnerHTML={value} /> : value
                }
              </StyledTd>
            )
          })}

        </StyledTr>
      )
    )
  }

  return (
    <StyledTable className={className}>
      <thead>
        <tr>
          {columns && renderColumns()}
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  background-color: ${({ theme }) => theme.COLOUR.transparent};
  border-collapse: collapse;
  margin-bottom: 1rem;
  width: 100%;
`

const StyledTr = styled.tr`
  cursor: ${({ pointer }) => pointer ? 'pointer' : 'initial'};
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.COLOUR.light};
  }

  :hover {
    background-color: #eee;
  }
`

const StyledTh = styled.th`
  border-bottom: 2px solid ${({ theme }) => theme.COLOUR.dark};
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: .75rem;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  vertical-align: bottom;
`

const StyledTd = styled.td`
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: .75rem;
  text-align: ${({ center }) => center && 'center'};
  vertical-align: top;
`

Table.propTypes = {
  classname: string,
  columns: array.isRequired,
  rowClick: func,
  rows: array.isRequired
}

Table.defaultProps = {
  className: 'Table',
  rowClick: () => {}
}
