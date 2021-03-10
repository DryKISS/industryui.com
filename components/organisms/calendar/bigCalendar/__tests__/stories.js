/**
 * Big Calendar
 */

// React
import React from 'react'

// UI
import { BigCalendar } from '../bigCalendar'
import Readme from '../README.md'

export default {
  components: BigCalendar,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Organisms/Big Calendar',
}

export const main = (args) => <BigCalendar {...args} />
