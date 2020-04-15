/**
 * Article
 */

// React
import React from 'react'

// UI
import { ArticleLayout } from 'components'
import Readme from '../README.md'

export default {
  title: 'Layouts/Article',
  component: ArticleLayout,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const article = {
  author: 'Ian Warner',
  category: 'Development',
  data: '<p>Static Site development</p>',
  date: '2019-07-16',
  description: 'Static Site development',
  excerpt: 'Static Site development',
  heading: 'Static Site development',
  hero: true,
  image: 'placeholder.svg',
  published: true,
  readtime: 2,
  slug: 'static-site-development',
  tags: ['static', 'jam'],
  time: '12:00pm',
  title: 'Static Site development'
}

export const main = () => <ArticleLayout frontMatter={article} />
