/**
 * Nivo
 */

// React
import React from 'react'

// UI
import { BarChart } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Nivo',
  componnet: BarChart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BarChart />
