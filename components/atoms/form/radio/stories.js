/**
 * Radio
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs/react'

// UI
import { Radio } from './'
import Readme from './README.md'

// Data
import { RADIO_GENDER } from './__mocks__'

// Story
storiesOf('Atoms/Form/Radio', module)

  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Radio
      data={RADIO_GENDER(select('Checked', {
        no: 'no',
        male: 'male',
        female: 'female'
      }, 'no'
      ))}
    />
  )

  .add('Stacked', () =>
    <Radio
      stacked
      data={RADIO_GENDER(select('Checked', {
        no: 'no',
        male: 'male',
        female: 'female'
      }, 'no'))} />
  )
