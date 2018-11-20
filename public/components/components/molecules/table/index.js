/**
 * Table Component
 */

// React
import React, { Component } from 'react'
import { array, func, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Table = withTheme(
  class Table extends Component {
    static propTypes = {
      classname: string,
      columns: array.isRequired,
      rowClick: func,
      rows: array.isRequired
    }

    static defaultProps = {
      className: 'Table',
      rowClick: () => {}
    }

    renderColumns = () => {
      const { columns } = this.props

      return (
        columns.map(({ formatter, text }, index) =>
          <StyledTh key={index}>
            {text}
          </StyledTh>
        )
      )
    }

    /**
     * Render Rows
     * Also check to see if columns have a formatter for the defined row
     *
     * @memberof Table
     */
    renderRows = () => {
      const { columns, rowClick, rows } = this.props

      return (
        rows.map((row, index) =>

          <StyledTr
            key={index}
            onClick={rowClick(row)}
            pointer={typeof rowClick() === 'function'}
          >

            {Object.entries(row).map(([key, value], index) =>

              <StyledTd key={index}>

                {
                  columns.length > 0 && columns[index].formatter
                    ? columns[index].formatter(value)
                    : value
                }

              </StyledTd>

            )}

          </StyledTr>

        )
      )
    }

    render () {
      const { className, columns } = this.props

      return (
        <StyledTable className={className}>

          <thead>
            <tr>
              {columns && this.renderColumns()}
            </tr>
          </thead>

          <tbody>
            {this.renderRows()}
          </tbody>

        </StyledTable>
      )
    }
  }
)

// Style
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
