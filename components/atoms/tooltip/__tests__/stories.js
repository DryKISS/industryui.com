/**
 * Tooltip
 */

// Storybook
import { Context } from 'decorators'

// UI
import { Button, Text, Tooltip } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
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
    context: Context('tooltip', 'black'),
    ...props
  }

  return (
    <>
      <Tooltip {...defaultProps}>
        <Button content='Hover over me' />
      </Tooltip>
    </>
  )
}

export const main = () => <BaseComponent />
export const withJsx = () => <BaseComponent content={<SampleTooltip />} />
