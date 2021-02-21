/**
 * Footer
 */

// React
import React from 'react'

// UI
import { Footer } from '../footer'
import Readme from '../README.md'

// Data
import { DRYKISS, FORMATTER, ONE_COLUMN, PORTAL } from '../__mocks__/footer'

export default {
  args: {
    showMonth: false
  },
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    columns: DRYKISS,
    fixed: props.showMonth,
    ...props
  }

  return <Footer {...defaultProps} />
}

export const main = (args) => <BaseComponent {...args} />
export const formatter = (args) => (
  <BaseComponent {...args} columns={FORMATTER} />
)
export const portal = (args) => <BaseComponent {...args} columns={PORTAL} />
export const _12Column = (args) => (
  <BaseComponent {...args} columns={ONE_COLUMN} />
)
