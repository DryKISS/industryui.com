/**
 * Bootstrap
 */

// React
import React, { useContext } from 'react'

// UI
import { Bootstrap, ConfigContext, Navbar } from 'components'
import Readme from '../README.md'

// Footer
import { FORMATTER } from '../../../organisms/footer/__mocks__/footer'

// Navbar
import { Default } from '../../../molecules/navbar/__mocks__/navbar'

export default {
  title: 'Layouts/Bootstrap',
  component: Bootstrap,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const { Brand } = useContext(ConfigContext)

  return (
    <Bootstrap
      footer={FORMATTER}
      Navigation={() => <Navbar brand={Brand.logo} links={Default} />}
      brand={Brand.name}
    >
      <p>Bootstrap</p>
    </Bootstrap>
  )
}
