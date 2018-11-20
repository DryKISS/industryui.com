/**
 * Article
 */

// React
import React, { Component, Fragment } from 'react'
import { object, string } from 'prop-types'

// UI
import {
  ArticleDetails, Breadcrumb, Category, Heading, Image
} from '../../'

// Styles
import styles from './styles'

// Style
import { withTheme } from 'styled-components'

export const Article = withTheme(
  class Article extends Component {
    static propTypes = {
      article: object.isRequired,
      category: string
    }

    content = () => ({
      __html: this.props.article.data
    })

    frontMatter = (matter) => {
      const { article: { frontmatter } } = this.props

      if (matter === 'tags') {
        return frontmatter[matter].split(',').map((item) => (
          { content: item.replace(/[[\]]/g, '').trim(), to: 'javascript:;' }
        ))
      }

      return frontmatter[matter]
    }

    render () {
      const { article, category } = this.props

      return (
        <Fragment>

          {/* // {role === 'article' &&
          //   <article
          //     itemprop='blogPost'
          //     itemscope=''
          //     itemtype='http://schema.org/BlogPosting'
          //     role='article'
          //   >
          // }

          // {role === 'article' &&
          //   </article>
          // }
          */}

          {/* Article */}
          <article
            className='Article'
            itemScope
            itemType='http://schema.org/BlogPosting'
            role='article'
          >

            {/* Header */}
            <header>

              {/* Image - Hero */}
              {this.frontMatter('image') &&
                <Image
                  alt={this.frontMatter('heading')}
                  src={this.frontMatter('image')}
                />
              }

              {/* Breadcrumb */}
              <Breadcrumb
                category={category}
                page={this.frontMatter('heading')}
                path='javasript:;'
              />

              {/* Category */}
              <Category category={category} path='javasript:;' />

              {/* Heading */}
              <Heading heading={this.frontMatter('heading')} />

              {/* Article Details */}
              <ArticleDetails
                author={this.frontMatter('author')}
                tags={this.frontMatter('tags')}
              />

            </header>

            {/* Article content */}
            <div
              className='Article-content'
              dangerouslySetInnerHTML={this.content()}
              itemProp='text'
            />

            {/* <footer>
              <% if locals[:pager] %>
                <% prevPage = article.article_previous || false %>
                <% nextPage = article.article_next || false %>
                <%= partial 'partials/molecule/pager.erb', locals: {
                  prevPage: prevPage,
                  nextPage: nextPage
                } %>
              <% end %>
            </footer> */}

          </article>

          <style jsx>{styles}</style>

        </Fragment>
      )
    }
  }
)
