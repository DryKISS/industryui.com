/**
 * Pagination
 */

// React
import React, { useState } from 'react'

// Storybook
import { number } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Pagination } from '../'
import Readme from '../README.md'
import { Icon } from '../../../atoms'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ pageCount, ...props }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const defaultProps = {
    breakCount: number('Break count', 5),
    context: Context(),
    currentPage,
    onPageChange: setCurrentPage,
    pageCount: number('Page count', pageCount || 10),
    size: Size(),
    ...props
  }

  return <Pagination {...defaultProps} />
}

export const Main = () => <BaseComponent />

export const withPrevAndNextButtons = () => <BaseComponent showNextAndPrev />

export const withManyItems = () => <BaseComponent showNextAndPrev pageCount={50} />

export const withCustomPrevAndNextButtons = () => (
  <BaseComponent
    showNextAndPrev
    prevLabel={<Icon icon='chevron-left' />}
    nextLabel={<Icon icon='chevron-right' />}
  />
)
