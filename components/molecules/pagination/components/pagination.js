/**
 * Pagination
 */

// React
import React from 'react'
import styled from 'styled-components'

import { PaginationItem } from './'
import { PaginationPropTypes } from './propTypes'

export const Pagination = ({
  children,
  context,
  currentPage,
  hideWhenOnlyOnePage,
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

  if (hideWhenOnlyOnePage && pageCount < 2) {
    return null
  }

  return (
    <StyledPagination aria-label='Pagination' {...props}>
      {children || renderContent()}
    </StyledPagination>
  )
}

const StyledPagination = styled.ul`
  padding-left: 0;
  list-style: none;
  width: fit-content;
  margin: 0 auto;
`

Pagination.propTypes = PaginationPropTypes

Pagination.defaultProps = {
  currentPage: 1,
  hideWhenOnlyOnePage: true,
  nextLabel: 'Next',
  onPageChange: () => {},
  pageCount: 1,
  prevLabel: 'Previous'
}
