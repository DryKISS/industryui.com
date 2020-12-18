/**
 * Bootstrap
 */

// React
import { useContext } from 'react'

// UI
import { Bootstrap, ConfigContext, Navbar, Text } from 'components'
import Readme from '../README.md'

// Footer
import { FORMATTER } from '../../../organisms/footer/__mocks__/footer'

// Navbar
import { Default } from '../../../molecules/navbar/__mocks__/navbar'

export default {
  component: Bootstrap,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Layouts/Bootstrap'
}

export const main = args => {
  const { Brand } = useContext(ConfigContext)

  return (
    <Bootstrap
      {...args}
      footer={FORMATTER}
      Navigation={() => <Navbar brand={Brand.logo} links={Default} />}
      brand={Brand.name}
    >
      <Text>Bootstrap</Text>
    </Bootstrap>
  )
}
