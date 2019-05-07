/**
 * Article Details
 */

// React
import { any, array, string } from 'prop-types'

// UI
import {
  Author,
  Date,
  Divider,
  Icon,
  List,
  ListItem,
  ReadTime,
  Tags
} from '../../'

// Style
import styled from 'styled-components'

export const ArticleDetails = ({ author, tags }) => {
  return (
    <StyledArticleDetails>

      <Divider />

      <List inline unstyled>

        {/* Date / Time */}
        <ListItem>
          <StyledIcon icon='calendar-alt' />
          <Date date={'2018-03-14'} />
        </ListItem>

        {/* Author */}
        <ListItem>
          <StyledIcon icon='user' />
          <Author author={author} />
        </ListItem>

        {/* Read time */}
        <ListItem>
          <StyledIcon icon='stopwatch' />
          <ReadTime time={2} />
        </ListItem>

      </List>

      <Tags tags={tags} />

      <Divider />

      <StyledShare>

        <StyledShareText>Share this article</StyledShareText>

        {/* Facebook */}
        <StyledShareLink href='javascript:;'>
          <Icon icon='facebook-square' prefix='fab' />
        </StyledShareLink>

        {/* Twitter */}
        <StyledShareLink href='javascript:'>
          <Icon icon='twitter-square' prefix='fab' />
        </StyledShareLink>

        {/* Pinterest */}
        <StyledShareLink href='javascript:;'>
          <Icon icon='pinterest-square' prefix='fab' />
        </StyledShareLink>

      </StyledShare>

      <Divider />

    </StyledArticleDetails>
  )
}

const StyledArticleDetails = styled.div`
  font-size: .875rem;
`

const StyledIcon = styled(Icon)`
  margin: 0 .5rem;
`

const StyledShare = styled.div`
  align-items: center;
  display: flex;
`

const StyledShareText = styled.span`
  margin-right: 2rem;
`

const StyledShareLink = styled.a`
  color: #00ccbc;
  font-size: 2rem;
  line-height: 1rem;
  margin-right: .5rem;
  text-decoration: none;
`

ArticleDetails.propTypes = {
  author: string.isRequired,
  date: any,
  tags: array
}

ArticleDetails.defaultProps = {
  tags: []
}
