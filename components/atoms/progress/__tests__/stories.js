/**
 * Progress
 */

// React
import React from 'react'

// Storybook
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'

// UI
import { CONTEXT, Progress, ProgressBar } from '../../../'
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

export const main = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
        now={now}
        striped={boolean('striped', false, ProgressBarGroupId)}
      >
        {now}%
      </ProgressBar>
    </Progress>
  )
}

export const Striped = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)
  return (
    <Progress height={text('height (with desired unit)', '1.5rem', ProgressGroupId)}>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
        now={now}
        striped={boolean('striped', true, ProgressBarGroupId)}
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
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
        now={now}
        striped={boolean('striped', true, ProgressBarGroupId)}
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
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        context={select('context', CONTEXT, 'primary', ProgressBarGroupId)}
        now={now}
        striped={boolean('striped', true, ProgressBarGroupId)}
      >
        {now}%
      </ProgressBar>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        context={select('context', CONTEXT, 'info', ProgressBarGroupId2)}
        now={now2}
        striped={boolean('striped', true, ProgressBarGroupId)}
      >
        {now2}%
      </ProgressBar>
    </Progress>
  )
}
