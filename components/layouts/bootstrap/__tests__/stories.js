/**
 * Bootstrap
 */

// React
import React, { useContext } from 'react'

// UI
import { Bootstrap } from '../../../'
import { ConfigContext } from '../../../services/config/context'
import { Navbar } from '../../../molecules/navbar/components/navbar'
import { Page } from '../../../layouts/page/page'
import { Text } from '../../../atoms/text/text'

import Readme from '../README.md'

// Copyright
import { Copyright } from '../../../molecules/copyright/__mocks__/copyright'

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

export const Main = (args) => {
  const { Brand } = useContext(ConfigContext)

  return (
    <Bootstrap
      {...args}
      copyright={Copyright}
      footer={FORMATTER}
      Navigation={() => <Navbar brand={Brand.logo} links={Default} />}
    >
      <Page
        meta={{
          description: 'Description',
          title: 'Meta'
        }}
        pageHeading={{
          heading: 'Heading',
          strapline: 'Strapline'
        }}
      >
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </Page>
    </Bootstrap>
  )
}
