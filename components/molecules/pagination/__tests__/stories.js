/**
 * Pagination
 */

// React
import React, { useState } from 'react'

// Storybook
import { ContextControl, SizeControl } from '../../../../.storybook/decorators'

// UI
import { Icon, Pagination } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    breakCount: 5,
    pageCount: 10,
    context: 'primary',
    size: 'md',
    showNextAndPrev: false,
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl(),
  },

  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Molecules/Pagination',
}

const BaseComponent = (props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const defaultProps = {
    currentPage,
    onPageChange: setCurrentPage,
    ...props,
  }

  return <Pagination {...defaultProps} />
}

export const Main = (args) => <BaseComponent {...args} />

export const withCustomPrevAndNextButtons = (args) => (
  <BaseComponent
    {...args}
    prevLabel={<Icon icon="chevron-left" />}
    nextLabel={<Icon icon="chevron-right" />}
  />
)
