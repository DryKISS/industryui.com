/**
 * Sidebar
 */

// React
import React, { useContext } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Sidebar } from '../'
import { ConfigContext } from 'components'

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

const BaseComponent = (props = {}) => {
  const { Brand } = useContext(ConfigContext)

  const defaultProps = {
    brand: Brand.logo,
    data: Data,
    ...props
  }

  return <Sidebar {...defaultProps} />
}
export const main = args => {
  console.log('El color ', args.backgroundColor, 'rgba(50, 115, 220, 0.3)')
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <BaseComponent />
      <div style={{ display: 'flex', flex: 1, backgroundColor: args.backgroundColor }}>
        <p>Content</p>
      </div>
    </div>
  )
}
main.args = {
  backgroundColor: 'grey'
}
