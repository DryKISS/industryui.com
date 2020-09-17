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

export const main = args => {
  console.log('El color ', args.backgroundColor, 'rgba(50, 115, 220, 0.3)')
  return (
    <div style={{ display: 'flex', flex: 1, width: '1000px' }}>
      <Sidebar data={Data} />
      <div style={{ display: 'flex', flex: 1, backgroundColor: args.backgroundColor }}>
        <p>Content</p>
      </div>
    </div>
  )
}
main.args = {
  backgroundColor: 'grey'
}
