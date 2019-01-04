/**
 * Article
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'
import { withKnobs, boolean, object, text, array } from '@storybook/addon-knobs/react'

import icon from './__resources__/dog-icon.png'

// UI
import { Article } from '../../'
import Readme from './README.md'

storiesOf('Templates/Article', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Default', withInfo()(() =>
    <Article
      category={ text('Category', 'Dog letters') }
      data="This is <b>formatted</b> article text. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      frontmatter={{
        image: icon,
        heading: text('Heading', 'Dogs for everyone'),
        author: text('Author', 'Jonh Smith'),
        tags: array('Tags', ['dogs', 'faq'])
      }}
    />
  ))
