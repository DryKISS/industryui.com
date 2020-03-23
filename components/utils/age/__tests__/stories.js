/**
 * Age
 */

// React
import React, { useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { age, DatePickerCalendar } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Utils/Age',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const [date, setDate] = useState(new Date('1997-09-20'))
  return (
    <>
      <p>Age: {age(date)}</p>

      <DatePickerCalendar
        dateFormat='d MMM yyyy'
        selected={date}
        showTimeSelect={false}
        onChange={date => setDate(date)}
      />
    </>
  )
}
