/**
 * Sidebar
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Sidebar } from '../'
import Readme from '../README.md'

// Data
import { Sidebar as Data } from '../__mocks__/links'

export default {
  title: 'Molecules/Sidebar',
  component: Sidebar,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export const main = () => (
  <div style={{ display: 'flex', flex: 1, width: '1000px' }}>
    <Sidebar data={Data} />
    <div style={{ display: 'flex', flex: 1, backgroundColor: 'grey' }}>
      <p>Content</p>
    </div>
  </div>
)
