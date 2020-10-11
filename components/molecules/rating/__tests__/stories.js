/**
 * Rating
 */

// Storybook
import { number } from '@storybook/addon-knobs'
import { Context } from 'decorators'

// UI
import { Rating } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Rating',
  component: Rating,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const valueKnob = (current, max) =>
  number('Rate', current || 3, {
    min: 0,
    max: max || 5
  })

export const main = () => <Rating value={valueKnob()} />

export const withSize = () => (
  <Rating
    size={number('Size', 10, {
      min: 0,
      max: 50
    })}
    value={valueKnob(3, 50)}
  />
)

export const withContext = () => <Rating value={valueKnob()} context={Context(null, 'warning')} />
