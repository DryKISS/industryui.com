/**
 * Big Calendar
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import Readme from '../README.md'

import { BigCalendar } from '../components/bigCalendar'

export default {
  title: 'Organisms/Big Calendar',
  decorators: [Wrapper],
  components: BigCalendar,

  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BigCalendar />
