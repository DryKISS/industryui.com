/**
 * Components - Details - Stories
 */

// Storybook
import { ContextControl } from 'decorators'

// UI
import { Button, ButtonToolbar, Details } from 'components'
import Readme from '../README.md'

export default {
  args: {
    children: 'Content',
    context: 'primary',
    open: false,
    summary: 'Summary',
    SummaryActionsComponent: '',
    style: {},
    Toolbar: '',
    withButton: false,
    withActionsComponent: false
  },
  argTypes: {
    context: ContextControl(),
    withButton: {
      name: 'With Simple Button'
    },
    withActionsComponent: {
      name: 'With Actions Component'
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

export const main = args => {
  if (args.withButton) {
    args.button = 'button'
    args.handleClick = e => {
      console.log(e)
    }
  }

  if (args.withActionsComponent) {
    args.SummaryActionsComponent = (
      <ButtonToolbar>
        <Button size='xs'>button1</Button>
        <Button size='xs'>button2</Button>
      </ButtonToolbar>
    )
  }

  return <Details {...args} />
}
