/**
 * Progress
 */

// React
import React from 'react'

import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'

import { CONTEXT } from '../../../'

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
const ProgressBarGroupId2 = 'ProgressBar2'
const ProgressGroupId = 'Progress'

export const defaultStory = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
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
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
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
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
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
  const now2 = number('now (percentage completed)', 30, {}, ProgressBarGroupId2)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
        striped={boolean('striped', true, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        now={now}
      >
        {now}%
      </ProgressBar>
      <ProgressBar
        context={select('context', CONTEXT, 'info', ProgressBarGroupId2)}
        striped={boolean('striped', true, ProgressBarGroupId)}
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        now={now2}
      >
        {now2}%
      </ProgressBar>
    </Progress>
  )
}
