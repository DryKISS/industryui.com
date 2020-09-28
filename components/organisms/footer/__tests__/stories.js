/**
 * Footer
 */

// Storybook
import { boolean } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Footer } from 'components'
import Readme from '../README.md'

// Data
import { DRYKISS, FORMATTER, ONE_COLUMN, PORTAL } from '../__mocks__/footer'

export default {
  title: 'Organisms/Footer',
  component: Footer,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    columns: DRYKISS,
    fixed: boolean('Fixed', props.showMonth || false),
    ...props
  }

  return <Footer {...defaultProps} />
}

export const main = () => <BaseComponent />

export const formatter = () => <BaseComponent columns={FORMATTER} />

export const portal = () => <BaseComponent columns={PORTAL} />

export const _12Column = () => <BaseComponent columns={ONE_COLUMN} />
