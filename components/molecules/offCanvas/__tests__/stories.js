/**
 * Molecules - OffCanvas - Tests - Stories
 */

// React
import React, { useContext } from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/context'

// UI
import Button from '../../../atoms/button/button/button'
import OffCanvasContext from '../../../services/offCanvas/context'
import Readme from '../README.md'
import OffCanvasForm from './form'

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
    submit: true,
    title: 'Header',
    transitionDuration: 300,
    variant: 'extended',
    width: '30'
  },
  argTypes: {
    context: ContextControl(),
    overlayOpacity: {
      control: {
        type: 'range',
        min: 0.0,
        max: 1.0,
        step: 0.1
      }
    },
    placement: {
      control: {
        type: 'select',
        options: ['bottom', 'left', 'right', 'top']
      }
    },
    variant: {
      control: {
        type: 'select',
        options: ['extended', 'normal']
      }
    },
    width: {
      name: 'Width(%)'
    }
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

const BaseComponent = (props) => {
  const offCanvas = useContext(OffCanvasContext)

  const onSubmit = ({ form }) => {
    console.info(form)
  }

  const handleClick = () => {
    offCanvas.show({
      ...props,
      content: <OffCanvasForm onSubmit={onSubmit} />
    })
  }

  return <Button content="Show" onClick={handleClick} />
}

export const main = (args) => <BaseComponent {...args} />
