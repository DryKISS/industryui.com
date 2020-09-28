/**
 * Pagination
 */

import styled from 'styled-components'

// Lodash
import chunk from 'lodash/chunk'

import { PaginationItem } from './'
import { PaginationPropTypes, PaginationDefaultProps } from './props'

export const Pagination = ({
  breakCount,
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
  if (!pageCount) return null

  const handleChange = type => {
    if (type === 'prev') onPageChange(currentPage - 1)
    else if (type === 'next') onPageChange(currentPage + 1)
    else onPageChange(type)
  }

  const pagesArray = chunk(
    Array(pageCount)
      .fill(0)
      .map((p, i) => i + 1),
    breakCount
  )

  const currentChunkIndex = pagesArray.findIndex(p => p.includes(currentPage))
  const prevChunk = pagesArray[currentChunkIndex - 1]
  const currentChunk = pagesArray[currentChunkIndex]
  const nextChunk = pagesArray[currentChunkIndex + 1]
  const showPrevDots = currentChunkIndex > 0
  const showNextDots = pagesArray.length > 1 && currentChunkIndex + 1 < pagesArray.length

  const showPrevButton = showNextAndPrev && pageCount > 5 && currentPage > 1
  const showNextButton = showNextAndPrev && pageCount > 5 && currentPage < pageCount

  const renderContent = () => (
    <>
      {showPrevButton && (
        <PaginationItem
          context={context}
          disabled={currentPage === 1}
          label={prevLabel}
          onClick={() => handleChange('prev')}
          size={size}
        />
      )}

      {showPrevDots && (
        <PaginationItem
          onClick={() => handleChange(prevChunk[prevChunk.length - 1])}
          context={context}
          label='...'
          size={size}
        />
      )}

      {currentChunk.map(p => {
        return (
          <PaginationItem
            active={p === currentPage}
            context={context}
            key={`${`page${p}`}`}
            label={p}
            onClick={() => handleChange(p)}
            size={size}
          />
        )
      })}

      {showNextDots && (
        <PaginationItem
          onClick={() => handleChange(nextChunk[0])}
          context={context}
          label='...'
          size={size}
        />
      )}

      {showNextButton && (
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

Pagination.defaultProps = PaginationDefaultProps
