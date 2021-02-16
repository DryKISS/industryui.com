/**
 * Molecules - OffCanvas - Tests - Stories
 */

// React
import { useContext } from 'react'

// Decorators
import { ContextControl } from '../../../../.storybook/decorators'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Button, OffCanvasContext } from '../../../'
import Readme from '../README.md'
import { OffCanvasForm } from './form'

export default {
  args: {
    closeOnOverlayClick: true,
    container: '',
    context: 'primary',
    hasAvatar: false,
    headerContent: '',
    lockScrollOnOpen: false,
    overlay: true,
    overlayOpacity: 0.3,
    placement: 'right',
    submit: false,
    title: 'Header',
    transitionDuration: 300,
    variant: 'extended',
    width: 40
  },
  argTypes: {
    context: ContextControl(),
    overlayOpacity: { control: { type: 'range', min: 0.0, max: 1.0, step: 0.1 } },
    placement: { control: { type: 'select', options: ['bottom', 'left', 'right', 'top'] } },
    variant: { control: { type: 'select', options: ['extended', 'normal'] } },
    width: { name: 'Width(%)' }
  },
  title: 'Molecules/OffCanvas',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = props => {
  const offCanvas = useContext(OffCanvasContext)

  const { register } = useForm()

  const handleClick = () => {
    offCanvas.show({
      ...props,
      content: <OffCanvasForm register={register} />
    })
  }

  return <Button content='Show' onClick={handleClick} />
}

export const main = args => <BaseComponent {...args} />
