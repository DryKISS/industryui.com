/**
 * Article Details
 */

// React
import { any, array, string } from 'prop-types'

// UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Author, Date, Divider, List, ReadTime, Tags } from '../../'

// Style
import styled from 'styled-components'

export const ArticleDetails = ({ author, tags }) => {
  return (
    <StyledArticleDetails>

      <Divider />

      <List inline unstyled>

        {/* Date / Time */}
        <List.Item>
          <StyledIcon icon='calendar-alt' />
          <Date date={'2018-03-14'} />
        </List.Item>

        {/* Author */}
        <List.Item>
          <StyledIcon icon='user' />
          <Author author={author} />
        </List.Item>

        {/* Read time */}
        <List.Item>
          <StyledIcon icon='clock' />
          <ReadTime time={2} />
        </List.Item>

      </List>

      <Tags tags={tags} />

      <Divider />

      <StyledShare>

        <StyledShareText>Share this article</StyledShareText>

        {/* Facebook */}
        <StyledShareLink href='javascript:;'>
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </StyledShareLink>

        {/* Twitter */}
        <StyledShareLink href='javascript:'>
          <FontAwesomeIcon icon={['fab', 'twitter-square']} />
        </StyledShareLink>

        {/* Pinterest */}
        <StyledShareLink href='javascript:;'>
          <FontAwesomeIcon icon={['fab', 'pinterest-square']} />
        </StyledShareLink>

      </StyledShare>

      <Divider />

    </StyledArticleDetails>
  )
}

const StyledArticleDetails = styled.div`
  font-size: .875rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: .5rem;
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
