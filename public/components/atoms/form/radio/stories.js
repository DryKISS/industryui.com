/**
 * Radio
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// UI
import { Radio } from '../../'
import Readme from './README.md'

// Data
import { RADIO_GENDER } from './__mocks__'

// Story
storiesOf('Atoms/Form/Radio', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Default', withInfo()(() =>
    <React.Fragment>
      <Radio data={RADIO_GENDER(select('Checked', { no: 'no', male: 'male', female: 'female' }, 'no'))}/>
      {}
    </React.Fragment>
  ))

  .add('Stacked', withInfo()(() =>
    <Radio stacked data={RADIO_GENDER(select('Checked', { no: 'no', male: 'male', female: 'female' }, 'no'))} />
  ))

