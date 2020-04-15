/**
 * Bootstrap
 */

// React
import React from 'react'

// UI
import { Bootstrap, Navbar } from 'components'
import Readme from '../README.md'

// Footer
import { FOOTER } from '../../../organisms/footer/__mocks__'
import { renderColumn } from '../../../organisms/footer/__tests__/stories'

// Navbar
import { Default } from '../../../molecules/navbar/__mocks__'

// Config
import { Brand } from 'config'

export default {
  title: 'Layouts/Bootstrap',
  component: Bootstrap,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Bootstrap
    footer={FOOTER(renderColumn)}
    Navigation={() => <Navbar brand={Brand.logo} links={Default} />}
    brand={Brand.name}
  >
    <p>Bootstrap</p>
  </Bootstrap>
)
