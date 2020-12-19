/**
 * Tooltip
 */

// Storybook
import { ContextControl } from 'decorators'

// UI
import { Button, Text, Tooltip } from 'components'
import Readme from '../README.md'

export default {
  args: {
    context: 'primary'
  },
  argTypes: {
    size: ContextControl()
  },
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Tooltip'
}

const SampleTooltip = () => (
  <>
    <Text content='Tooltip' context='white' />
    <Text content='Note' context='dark' />
  </>
)

const BaseComponent = props => {
  const defaultProps = {
    content: 'Hovered',
    ...props
  }

  return (
    <Tooltip {...defaultProps}>
      <Button content='Hover over me' />
    </Tooltip>
  )
}

export const main = args => <BaseComponent {...args} />
export const withJsx = args => <BaseComponent {...args} content={<SampleTooltip />} />
