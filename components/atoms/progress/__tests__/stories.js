/**
 * Progress
 */

// React
import React, { useState } from 'react'

// Storybook
import { ContextControl, SizeControl } from '../../../../.storybook/decorators'

// UI
import { Button, Progress, ProgressBar, Space } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    animated: false,
    context: 'primary',
    now: 30,
    striped: false,
    size: 'md'
  },
  argTypes: {
    now: {
      name: 'now (percentage completed)'
    },
    context: ContextControl(),
    size: SizeControl()
  },
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Progress'
}

export const Main = (args) => {
  const [Percent, setPercent] = useState(args.now)

  const handleClick = () => {
    if (Percent < 100) {
      setPercent(Percent + 5)
    }
  }

  return (
    <>
      <Space>
        <Progress size={args.size}>
          <ProgressBar
            animated={args.animated}
            context={args.context}
            now={Percent}
            striped={args.striped}>
            {Percent}%
          </ProgressBar>
        </Progress>
      </Space>

      <Button size="sm" onClick={handleClick}>
        Increase
      </Button>
    </>
  )
}
