/**
 * Progress
 */

// Storybook
import { boolean, number } from '@storybook/addon-knobs'
import { Context, Size } from 'decorators'

// UI
import { Progress, ProgressBar } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const ProgressGroupId = 'Progress'
const ProgressBarGroupId = 'ProgressBar'
const ProgressBarGroupId2 = 'ProgressBar2'

export const main = () => {
  const now = number('now (percentage completed)', 30, {}, ProgressBarGroupId)

  return (
    <Progress size={Size(ProgressGroupId)}>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        context={Context(ProgressBarGroupId)}
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
    <Progress size={Size(ProgressGroupId)}>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        context={Context(ProgressBarGroupId)}
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
    <Progress size={Size(ProgressGroupId)}>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        context={Context(ProgressBarGroupId)}
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
    <Progress size={Size(ProgressGroupId)}>
      <ProgressBar
        animated={boolean('animated (striped must be checked)', true, ProgressBarGroupId)}
        context={Context(ProgressBarGroupId)}
        now={now}
        striped={boolean('striped', true, ProgressBarGroupId)}
      >
        {now}%
      </ProgressBar>

      <ProgressBar
        animated={boolean('animated (striped must be checked)', false, ProgressBarGroupId)}
        context={Context(ProgressBarGroupId2)}
        now={now2}
        striped={boolean('striped', true, ProgressBarGroupId)}
      >
        {now2}%
      </ProgressBar>
    </Progress>
  )
}
