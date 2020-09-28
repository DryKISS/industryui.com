/**
 * Components - Details - Stories
 */

// UI
import { Button, ButtonToolbar, Details } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Details',
  component: Details,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const main = ({ ...args }) => {
  const additionalProps = {}
  if (args.withButton) {
    additionalProps.button = 'button'
    additionalProps.handleClick = e => {
      console.log(e)
    }
  }
  if (args.withActionsComponent) {
    additionalProps.SummaryActionsComponent = (
      <ButtonToolbar>
        <Button size='xs'>button1</Button>
        <Button size='xs'>button2</Button>
      </ButtonToolbar>
    )
  }

  return (
    <Details {...args} {...additionalProps}>
      {args.content}
    </Details>
  )
}
export const details = main.bind({})
details.args = {
  summary: 'Summary',
  content: 'Content',
  withButton: false,
  withActionsComponent: false
}
details.argTypes = {
  withButton: { name: 'With Simple Button' },
  withActionsComponent: { name: 'With Actions Component' }
}
