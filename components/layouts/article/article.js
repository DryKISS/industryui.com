/**
 * Article template
 * Provides the base template to showcase an Article
 */

// React
import React from 'react'

// Config
// import { BRAND } from 'config'

// UI
import {
  Article,
  Column,
  Container,
  // MetaHead,
  Row
} from '../../'

// import { BlogSidebar } from './components'

export const ArticleLayout = ({ children, frontMatter }) => {
  // const meta = {
  //   canonical: `blog/${frontMatter.slug}`,
  //   description: frontMatter.description,
  //   title: frontMatter.title
  // }

  return (
    <Container>
      {/* <MetaHead meta={meta} brand={BRAND} /> */}

      <Row>
        <Column md={12}>
          <Article article={frontMatter} />
        </Column>

        {/* <Column md={4}>
          <BlogSidebar />
        </Column> */}
      </Row>
    </Container>
  )
}
