/**
 * Components -  Blog - Details
 */

// React
import React from 'react'
import { object } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import BlogCategory from '../category/category'
import BlogReadTime from '../readTime/readTime'
import BlogTags from '../tags/tags'
import Divider from '../../atoms/divider/divider'
import FacebookShareButton from '../../social/facebook/pagePlugin'
import Icon from '../../atoms/icon/icon/icon'
import List from '../../atoms/list/list'
import ListItem from '../../atoms/list/listItem'
import slugify from '../../utils/slugify/slugify'
import Date from '../../atoms/date/date'

const BlogDetails = ({ article, config, facebook }) => {
  return (
    <StyledArticleDetails>
      <Divider size="sm" />

      <List inline unstyled style={{ marginTop: '.25rem' }}>
        <ListItem style={{ marginRight: '1rem' }}>
          <StyledIcon context="dark" icon="calendar-alt" />
          <Date date={article.date} size="sm" />
        </ListItem>

        <ListItem style={{ marginRight: '1rem' }}>
          <StyledIcon context="dark" icon="user" />
          <BlogCategory author config={config} to={article.author} />
        </ListItem>

        <ListItem style={{ marginRight: '1rem' }}>
          <StyledIcon context="dark" icon="stopwatch" />
          <BlogReadTime time={article.readtime} />
        </ListItem>
      </List>

      {article.tags && <BlogTags tags={article.tags} />}

      <Divider size="sm" />

      <StyledShare>
        <StyledShareText>Share this article</StyledShareText>

        <FacebookShareButton
          appId={facebook.appId}
          hashTag={facebook.hashTag}
          iFrame
          to={`${facebook.domain}${config.path}/${slugify(article.category)}/${article.slug}`}
        />

        {/* Twitter */}
        {/* <StyledShareLink href='javascript:'>
          <Icon icon='twitter-square' prefix='fab' />
        </StyledShareLink> */}

        {/* Pinterest */}
        {/* <StyledShareLink href='javascript:;'>
          <Icon icon='pinterest-square' prefix='fab' />
        </StyledShareLink> */}
      </StyledShare>

      <Divider size="sm" />
    </StyledArticleDetails>
  )
}

const StyledArticleDetails = styled.div`
  font-size: 0.875rem;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.25rem;
`

const StyledShare = styled.div`
  align-items: center;
  display: flex;
`

const StyledShareText = styled.span`
  margin-right: 1rem;
`

// const StyledShareLink = styled.a`
//   color: #00ccbc;
//   font-size: 2rem;
//   line-height: 1rem;
//   margin-right: .5rem;
//   text-decoration: none;
// `

BlogDetails.propTypes = {
  article: object.isRequired,
  config: object.isRequired,
  facebook: object
}

export default BlogDetails
