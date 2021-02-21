/**
 * Components - Details - Stories
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { Button, ButtonToolbar, Details } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    children: 'Content',
    context: 'primary',
    open: false,
    summary: 'Summary',
    style: {},
    withActionsComponent: false,
    withButton: false,
    withToolbar: false
  },
  argTypes: {
    context: ContextControl(),
    withActionsComponent: {
      name: 'With Actions Component'
    },
    withButton: {
      name: 'With Simple Button'
    },
    withToolbar: {
      name: 'With Toolbar'
    }
  },
  component: Details,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Details'
}

const toolbar = () => {
  return (
    <ButtonToolbar>
      <Button size="xs">button1</Button>
      <Button size="xs">button2</Button>
    </ButtonToolbar>
  )
}

export const main = (args) => {
  if (args.withButton) {
    args.button = 'button'

    args.handleClick = (e) => {
      console.info(e)
    }
  }

  if (args.withActionsComponent) {
    args.SummaryActionsComponent = (
      <ButtonToolbar>
        <Button size="xs">button1</Button>
        <Button size="xs">button2</Button>
      </ButtonToolbar>
    )
  }

  if (args.withToolbar) {
    args.Toolbar = toolbar
  }

  return <Details {...args} />
}
