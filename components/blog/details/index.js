/**
 * Blog - Details
 */

// React
import { object } from 'prop-types'

// UI
import {
  BlogCategory,
  BlogReadTime,
  BlogTags,
  Date,
  Divider,
  FacebookShareButton,
  Icon,
  List,
  ListItem,
  slugify
} from '../../'

// Style
import styled from 'styled-components'

export const BlogDetails = ({ article, config, facebook }) => {
  return (
    <StyledArticleDetails>
      <Divider />

      <List inline unstyled style={{ marginTop: '.25rem' }}>
        {/* Date / Time */}
        <ListItem style={{ marginRight: '1rem' }}>
          <StyledIcon context='dark' icon='calendar-alt' />
          <Date date={article.date} />
        </ListItem>

        {/* Author */}
        <ListItem style={{ marginRight: '1rem' }}>
          <StyledIcon context='dark' icon='user' />
          <BlogCategory author config={config} to={article.author} />
        </ListItem>

        {/* Read time */}
        <ListItem style={{ marginRight: '1rem' }}>
          <StyledIcon context='dark' icon='stopwatch' />
          <BlogReadTime time={2} />
        </ListItem>
      </List>

      {article.tags && <BlogTags tags={article.tags} />}

      <Divider />

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

      <Divider />
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
