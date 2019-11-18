import { useState, useRef, useEffect } from 'react'

// UI
import { OffCanvas } from '../'
import Readme from '../README.md'


import { boolean, select, withKnobs, text } from '@storybook/addon-knobs'
import { COLOUR } from '../../../theme/variables/colour'

export default {
  title: 'Molecules/OffCanvas',
  components: OffCanvas,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const [isChecked, toggleCheck] = useState(true)
  const textKnob = text('headerText', 'Homyze')

  return (
    <>
      <label htmlFor='offCanvas'>Show/Hide OffCanvas </label>
      <input onChange={(e) => toggleCheck(!isChecked)} id='offCanvas' type='checkbox' checked={isChecked} />
      <OffCanvas
        headerText={textKnob}
        show={isChecked}
        toggleShow={toggleCheck}
      >
        Components go here
      </OffCanvas>
    </>
  )
}