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

export const primary = () => <Pagination activePage={2} onPageChange={() => {}} totalPages={4} />
