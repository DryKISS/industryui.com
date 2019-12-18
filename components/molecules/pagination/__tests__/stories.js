/**
 * Pagination
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Pagination } from '../'
import Readme from '../README.md'
import { Icon } from '../../../atoms'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    context: Context(),
    size: Size(),
    ...props
  }

  return <Pagination {...defaultProps} />
}

export const Main = () => <BaseComponent currentPage={1} onPageChange={() => {}} pageCount={4} />

export const withPrevAndNextButtons = () => (
  <BaseComponent currentPage={1} onPageChange={() => {}} pageCount={4} showNextAndPrev />
)

export const withCustomPrevAndNextButtons = () => (
  <BaseComponent
    currentPage={1}
    onPageChange={() => {}}
    pageCount={4}
    showNextAndPrev
    prevLabel={<Icon icon='chevron-left' />}
    nextLabel={<Icon icon='chevron-right' />}
  />
)
