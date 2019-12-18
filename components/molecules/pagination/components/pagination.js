/**
 * Pagination
 */

// React
import React from 'react'
import { any, func, number, string, bool, oneOfType, node, oneOf } from 'prop-types'
import styled from 'styled-components'

import { CONTEXT, SIZE } from '../../../'
import { PaginationItem } from '../'

export const Pagination = ({
  children,
  context,
  currentPage,
  nextLabel,
  onPageChange,
  pageCount,
  prevLabel,
  showNextAndPrev,
  size,
  ...props
}) => {
  const handleChange = type => {
    if (type === 'prev') onPageChange(currentPage - 1)
    else if (type === 'next') onPageChange(currentPage + 1)
    else onPageChange(type)
  }
  const renderContent = () => (
    <>
      {showNextAndPrev && (
        <PaginationItem
          context={context}
          disabled={currentPage === 1}
          label={prevLabel}
          onClick={() => handleChange('prev')}
          size={size}
        />
      )}
      {Array(pageCount)
        .fill(0)
        .map((p, i) => (
          <PaginationItem
            active={i + 1 === currentPage}
            context={context}
            key={1 + i}
            label={1 + i}
            onClick={() => handleChange(1 + i)}
            size={size}
          />
        ))}
      {showNextAndPrev && (
        <PaginationItem
          context={context}
          disabled={currentPage === pageCount}
          label={nextLabel}
          onClick={() => handleChange('next')}
          size={size}
        />
      )}
    </>
  )
  return (
    <StyledPagination aria-label='Pagination' {...props}>
      {children || renderContent()}
    </StyledPagination>
  )
}

Pagination.propTypes = {
  children: any,
  context: oneOf(Object.values(CONTEXT)),
  currentPage: number,
  nextLabel: oneOfType([string, node]),
  onPageChange: func.isRequired,
  pageCount: number,
  prevLabel: oneOfType([string, node]),
  showNextAndPrev: bool,
  size: oneOf(Object.values(SIZE))
}

Pagination.defaultProps = {
  currentPage: 1,
  nextLabel: 'Next',
  pageCount: 1,
  prevLabel: 'Previous'
}

const StyledPagination = styled.ul`
  padding-left: 0;
  list-style: none;
  width: fit-content;
  margin: 0 auto;
`
