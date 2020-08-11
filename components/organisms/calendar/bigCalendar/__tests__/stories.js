/**
 * Big Calendar
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { BigCalendar } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Big Calendar',
  components: BigCalendar,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BigCalendar />
