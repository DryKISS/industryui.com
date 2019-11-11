/**
 * Progress
 */

// React
import React from 'react'

import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'

// UI
import { Progress, ProgressBar } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Progress',
  decorators: [withKnobs],
  component: Progress,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const ProgressBarGroupId = 'ProgressBar'
const ProgressGroupId = 'Progress'

export const defaultStory = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        striped={boolean('striped', false, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        now={now}
      >
        {now}%
      </ProgressBar>
    </Progress>
  )
}

defaultStory.story = {
  name: 'Default'
}

export const Striped = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        striped={boolean('striped', true, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        now={now}
      >
        {now}%
      </ProgressBar>
    </Progress>
  )
}

export const Animated = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        striped={boolean('striped', true, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        now={now}
      >
        {now}%
      </ProgressBar>
    </Progress>
  )
}

export const MultipleProgressBars = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        striped={boolean('striped', true, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        now={now}
      >
        {now}%
      </ProgressBar>
      <ProgressBar
        bgColor='green'
        striped={boolean('striped', true, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        now={now}
      >
        {now}%
      </ProgressBar>
    </Progress>
  )
}
