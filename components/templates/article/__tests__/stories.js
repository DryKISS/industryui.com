/**
 * Article
 */

// React
import React from 'react'

// UI
import { Article } from '../article'
import Readme from '../README.md'

export default {
  args: {
    author: 'Jonh Smith',
    category: 'Dog letters',
    data: `This is <b>formatted</b> article text. <br /> Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur.`,
    heading: 'Dogs for everyone',
    image: '',
    tags: ['dogs', 'faq']
  },
  component: Article,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Templates/Article'
}

export const Main = (args) => {
  const { author, category, data, heading, image, tags } = args

  return (
    <Article
      article={{
        author,
        category,
        data,
        heading,
        image,
        tags
      }}
      config={{}}
      facebook={{}}
    />
  )
}
