/**
 * Article
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, array, text } from '@storybook/addon-knobs'

import icon from './__resources__/dog-icon.png'

// UI
import { Article } from './'
import Readme from './README.md'

storiesOf('Templates/Article', module)
  .addDecorator(withKnobs)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Article
      article={{
        author: text('Author', 'Jonh Smith'),
        category: text('Category', 'Dog letters'),
        data: 'This is <b>formatted</b> article text. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        heading: text('Heading', 'Dogs for everyone'),
        image: icon,
        tags: array('Tags', ['dogs', 'faq'])
      }}
      config={{}}
      facebook={{}}
    />
  )
