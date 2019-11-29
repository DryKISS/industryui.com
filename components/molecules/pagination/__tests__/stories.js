/**
 * Pagination
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

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

export const Main = () => <Pagination currentPage={1} onPageChange={() => {}} pageCount={4} />

export const withPrevAndNextButtons = () => (
  <Pagination currentPage={1} onPageChange={() => {}} pageCount={4} showNextAndPrev />
)

export const withCustomPrevAndNextButtons = () => (
  <Pagination
    currentPage={1}
    onPageChange={() => {}}
    pageCount={4}
    showNextAndPrev
    prevLabel={<Icon icon='chevron-left' />}
    nextLabel={<Icon icon='chevron-right' />}
  />
)
