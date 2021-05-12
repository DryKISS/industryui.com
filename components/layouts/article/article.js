/**
 * Article template
 * Provides the base template to showcase an Article
 */

// React
import React from 'react'

// Config
// import { BRAND } from 'config'

// UI
import Article from '../../templates/article/article'
import Column from '../../atoms/grid/Column'
import Container from '../../atoms/grid/Container'
import Row from '../../atoms/grid/Row'

// import { BlogSidebar } from './components'

const ArticleLayout = ({ children, frontMatter }) => {
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

export default ArticleLayout
