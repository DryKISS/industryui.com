/**
 * Pagination
 */

// React
import React from 'react'
import { func, number, string, bool, oneOfType, node } from 'prop-types'

// Style
import styled from 'styled-components'
import { Button } from '../../../atoms/button'

export const Pagination = ({
  currentPage,
  nextLabel,
  onPageChange,
  pageCount,
  prevLabel,
  showNextAndPrev
}) => {
  const handleChange = type => {
    if (type === 'prev') onPageChange(currentPage - 1)
    else if (type === 'next') onPageChange(currentPage + 1)
    else onPageChange(type)
  }
  return (
    <StyledPagination aria-label='Pagination'>
      <ul>
        {showNextAndPrev && (
          <li>
            <Button onClick={() => handleChange('prev')} disabled={currentPage === 1}>
              {prevLabel}
            </Button>
          </li>
        )}

        {Array(pageCount)
          .fill(0)
          .map((p, i) => (
            <li key={1 + i}>
              <Button
                className={i + 1 === currentPage ? 'active' : ''}
                onClick={() => handleChange(1 + i)}
              >
                {1 + i}
              </Button>
            </li>
          ))}
        {showNextAndPrev && (
          <li>
            <Button onClick={() => handleChange('next')} disabled={currentPage === pageCount}>
              {nextLabel}
            </Button>
          </li>
        )}
      </ul>
    </StyledPagination>
  )
}

Pagination.propTypes = {
  currentPage: number,
  nextLabel: oneOfType([string, node]),
  onPageChange: func.isRequired,
  pageCount: number,
  prevLabel: oneOfType([string, node]),
  showNextAndPrev: bool
}

Pagination.defaultProps = {
  currentPage: 1,
  nextLabel: 'Next',
  pageCount: 1,
  prevLabel: 'Previous'
}

const StyledPagination = styled.nav`
  ul {
    padding-left: 0;
    list-style: none;
    width: fit-content;
    margin: 0 auto;
  }
  li {
    display: inline;
    button {
      position: relative;
      cursor: pointer;
      padding: 0.5rem 0.75rem;
      margin-left: -1px;
      line-height: 1.25;
      color: ${({ theme }) => theme.COLOUR.primary};
      background-color: ${({ theme }) => theme.COLOUR.white};
      border: 1px solid ${({ theme }) => theme.COLOUR.light};
      font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSizeBase};
      border-radius: 0;
      :hover {
        background-color: ${({ theme }) => theme.COLOUR.light};
        color: ${({ theme }) => theme.COLOUR.primary};
        border: 1px solid ${({ theme }) => theme.COLOUR.light};
      }
      &.active {
        background-color: ${({ theme }) => theme.COLOUR.primary};
        color: ${({ theme }) => theme.COLOUR.white};
      }
      :first-child {
        margin-left: 0;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      :last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
    }
  }
`
