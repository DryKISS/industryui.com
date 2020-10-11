/**
 * Button - Toolbar
 */

// Storybook
import { AlignControl, SizeControl } from 'decorators'

// UI
import { ALIGN, Button, ButtonToolbar, Icon, SIZE } from 'components'
import Readme from '../README.md'

export default {
  args: {
    align: ALIGN.Start,
    size: SIZE.MD
  },
  argTypes: {
    align: AlignControl(),
    size: SizeControl()
  },
  component: ButtonToolbar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Button/Toolbar'
}

const Children = ({ size }) => {
  return (
    <>
      <Button as='a' data-tip='Button' context='primary' key={1} onClick={() => {}} size={size}>
        <Icon icon='user' prefix='fas' style={{ pointerEvents: 'none' }} />
      </Button>

      <Button as='a' data-tip='Button' context='warning' key={2} onClick={() => {}} size={size}>
        <Icon icon='trash' prefix='fas' style={{ pointerEvents: 'none' }} />
      </Button>
    </>
  )
}

export const main = args => {
  return (
    <ButtonToolbar {...args}>
      <Children size={args.size} />
    </ButtonToolbar>
  )
}
