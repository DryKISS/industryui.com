/**
 * Molecules - OffCanvas
 */

// Storybook
import { select, text, withKnobs, number, boolean } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { OffCanvas } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/OffCanvas',
  components: OffCanvas,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const show = boolean('Show', true)
  const widthKnob = number('Width (%)', 50, {
    range: true,
    min: 1,
    max: 100,
    step: 1
  })

  const defaultProps = {
    context: Context('', 'secondary'),
    headerText: text('Header', 'Homyze'),
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
    width: widthKnob + '%',
    show
  }

  return <OffCanvas {...defaultProps} />
}

export const main = () => <BaseComponent>Components go here</BaseComponent>
