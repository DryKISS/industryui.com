/**
 * Checkbox
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// UI
import { Checkbox } from '../../'
import Readme from './README.md'

// Story
const stories = storiesOf('Atoms/Form/Checkbox', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

const CHECKBOXS = [
  {
    id: 'insurance',
    // isChecked: ownedToggle === true,
    label: 'I pledge to get insurance for my new dog',
    required: true,
    value: 'Insurance'
  }
]

// Default
stories.add('Default',
  withInfo()(() =>
    <Checkbox
      data={CHECKBOXS}
      legend='Finally, which of the following do you pledge to do for your new dog?'
      handleChange={action('button-click')}
    />
  )
)

// onClick={action('button-click')}
// checked={boolean('Checked', null)}
// disabled={boolean('Disabled', false)}
// indeterminate={boolean('Indeterminate', false)}
// label={text('Label', 'Checkbox')}
// name={text('Name', 'checkbox')}
// readOnly={boolean('Readonly', false)}
// slider={boolean('Slider', false)}
// toggle={boolean('Toggle', false)}
