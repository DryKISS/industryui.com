/**
 * Components - Organisms - Footer - Story
 */

// React
import React from 'react'

// UI
import Footer from '../footer'
import Readme from '../README.md'

// Data
import PORTAL from '../__mocks__/portal'
import DRYKISS from '../__mocks__/drykiss'
import FORMATTER from '../__mocks__/formatter'
import ONE_COLUMN from '../__mocks__/oneColumn'

export default {
  args: {
    showMonth: false
  },
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Footer'
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
export const formatter = (args) => <BaseComponent {...args} columns={FORMATTER} />
export const portal = (args) => <BaseComponent {...args} columns={PORTAL} />
export const _12Column = (args) => <BaseComponent {...args} columns={ONE_COLUMN} />
