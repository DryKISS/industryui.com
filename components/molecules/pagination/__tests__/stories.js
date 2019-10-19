/**
 * Pagination
 */

// React
import React from 'react'

// UI
import { Pagination } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const primary = () => <Pagination activePage={2} onPageChange={() => {}} totalPages={4} />
