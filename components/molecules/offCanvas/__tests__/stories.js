/**
 * Molecules - OffCanvas - Tests - Stories
 */

// React
import React, { useContext } from 'react'

// Storybook
import { select, text, withKnobs, number, boolean } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Button, OffCanvasContext } from 'components'
import Readme from '../README.md'
import { OffCanvasForm } from './form'

export default {
  title: 'Molecules/OffCanvas',
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const offCanvas = useContext(OffCanvasContext)

  const { register } = useForm()

  const defaultProps = {
    closeOnOverlayClick: boolean('Close on overlay click', true),
    container: text('Container', ''),
    context: Context('', 'primary'),
    hasAvatar: boolean('Avatar', false),
    headerContent: text('headerContent', ''),
    lockScrollOnOpen: boolean('Lock scroll open', false),
    overlay: boolean('Overlay', true),
    overlayOpacity: number('Opacity', 0.3, {
      range: true,
      min: 0.1,
      max: 1,
      step: 0.1
    }),
    placement: select(
      'Placement',
      {
        Top: 'top',
        Right: 'right',
        Bottom: 'bottom',
        Left: 'left'
      },
      'right'
    ),
    title: text('Title', 'Header'),
    transitionDuration: number('Transition duration', 300),
    variant: select(
      'Variant',
      {
        Normal: 'normal',
        Extended: 'extended'
      },
      'Extended'
    ),
    width:
      number('Width (%)', 40, {
        range: true,
        min: 1,
        max: 100,
        step: 1
      }) + '%'
  }

  const handleClick = () => {
    offCanvas.show({
      ...defaultProps,
      content: <OffCanvasForm register={register} />
    })
  }

  return <Button content='Show' onClick={handleClick} />
}

export const main = () => <BaseComponent />
