/**
 * Components - Organisms - Charts - Schedule Chart - Mocks
 */

// React
import React from 'react'

// UI
import Text from '../../../../atoms/text/text'

const SCHEDULES = [
  [
    {
      id: 1,
      task: 'some Inspection',
      compliance: true,
      count: 1,
      costCustomer: 150,
      costSupplier: 125,
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: [1, 'warning', 'Compliance documents required'],
      jul: [5, 'danger', 'not done'],
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0
    },
    {
      id: 2,
      task: 'Window Removal',
      compliance: false,
      count: 12,
      costCustomer: 75,
      costSupplier: 50,
      jan: [1, 'danger', 'Supplier late'],
      feb: [1, 'success', 'No issues'],
      mar: [4, 'warning', 'Document pending'],
      apr: [1],
      may: [1],
      jun: [1],
      jul: [1],
      aug: [1],
      sep: [1],
      oct: [1],
      nov: [1],
      dec: [1]
    },
    {
      id: 3,
      task: 'Desk Cleaning',
      compliance: false,
      count: 24,
      costCustomer: 100,
      costSupplier: 50,
      jan: [2, 'success', 'No issues'],
      feb: [
        2,
        'danger',
        <Text context="white" size="xs">
          2 jobs
          <br />1 completed
          <br />1 past due
        </Text>
      ],
      mar: [2, 'success', 'No issues'],
      apr: 2,
      may: 2,
      jun: 2,
      jul: 2,
      aug: 2,
      sep: 2,
      oct: 2,
      nov: 2,
      dec: 2
    },
    {
      id: 4,
      task: 'Totals',
      compliance: false,
      count: 37,
      costCustomer: 325,
      costSupplier: 225,
      jan: 3,
      feb: 3,
      mar: 3,
      apr: 2,
      may: 3,
      jun: 4,
      jul: 3,
      aug: 3,
      sep: 3,
      oct: 3,
      nov: 3,
      dec: 3
    }
  ],
  [
    {
      id: 1,
      task: 'Bolier Inspection',
      compliance: true,
      count: 1,
      costCustomer: 150,
      costSupplier: 125,
      jan: 0,
      feb: 1,
      mar: 0,
      apr: 1,
      may: 0,
      jun: [1, 'danger', 'Compliance documents'],
      jul: [3, 'success', 'all done'],
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 1,
      dec: 0
    },
    {
      id: 2,
      task: 'Window Cleaning',
      compliance: false,
      count: 12,
      costCustomer: 75,
      costSupplier: 50,
      jan: [1, 'danger', 'Supplier late'],
      feb: [1, 'success', 'No issues'],
      mar: [1, 'warning', 'Document pending'],
      apr: [1],
      may: [1],
      jun: [4],
      jul: [1],
      aug: [2],
      sep: [1],
      oct: [1],
      nov: [1],
      dec: [1]
    },
    {
      id: 3,
      task: 'Desk Cleaning',
      compliance: false,
      count: 24,
      costCustomer: 100,
      costSupplier: 50,
      jan: [2, 'success', 'No issues'],
      feb: [
        2,
        'danger',
        <Text context="white" size="xs">
          2 jobs
          <br />1 completed
          <br />1 past due
        </Text>
      ],
      mar: [2, 'success', 'No issues'],
      apr: 2,
      may: 2,
      jun: 2,
      jul: 2,
      aug: 2,
      sep: 2,
      oct: 2,
      nov: 2,
      dec: 2
    },
    {
      id: 4,
      task: 'Totals',
      compliance: false,
      count: 37,
      costCustomer: 325,
      costSupplier: 225,
      jan: 3,
      feb: 3,
      mar: 3,
      apr: 2,
      may: 3,
      jun: 4,
      jul: 3,
      aug: 3,
      sep: 3,
      oct: 6,
      nov: 7,
      dec: 3
    }
  ],
  [
    {
      id: 1,
      task: 'Bolier Inspection',
      compliance: true,
      count: 1,
      costCustomer: 150,
      costSupplier: 125,
      jan: 0,
      feb: 1,
      mar: 0,
      apr: 1,
      may: 0,
      jun: [1, 'danger', 'Compliance documents'],
      jul: [3, 'success', 'all done'],
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 1,
      dec: 0
    },
    {
      id: 2,
      task: 'Window Cleaning',
      compliance: false,
      count: 12,
      costCustomer: 75,
      costSupplier: 50,
      jan: [1, 'danger', 'Supplier late'],
      feb: [1, 'success', 'No issues'],
      mar: [1],
      apr: [1, 'warning', 'Document pending'],
      may: [1],
      jun: [4],
      jul: [1],
      aug: [2],
      sep: [1],
      oct: [1],
      nov: [1],
      dec: [1]
    },
    {
      id: 3,
      task: 'Desk Cleaning',
      compliance: false,
      count: 24,
      costCustomer: 100,
      costSupplier: 50,
      jan: [2, 'success', 'No issues'],
      feb: [
        2,
        'danger',
        <Text context="white" size="xs">
          2 jobs
          <br />1 completed
          <br />1 past due
        </Text>
      ],
      mar: [2, 'success', 'No issues'],
      apr: 2,
      may: 2,
      jun: 2,
      jul: 2,
      aug: 2,
      sep: 2,
      oct: 2,
      nov: 2,
      dec: 2
    },
    {
      id: 4,
      task: 'Totals',
      compliance: false,
      count: 37,
      costCustomer: 325,
      costSupplier: 225,
      jan: 3,
      feb: 3,
      mar: 3,
      apr: 2,
      may: 3,
      jun: 4,
      jul: 3,
      aug: 3,
      sep: 3,
      oct: 6,
      nov: 7,
      dec: 3
    }
  ]
]

export default SCHEDULES
