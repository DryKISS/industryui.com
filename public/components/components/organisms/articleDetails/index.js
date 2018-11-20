/**
 * Article Details
 */

// React
import React, { Component, Fragment } from 'react'
import { array, string } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// UI
import { Author, Date, Divider, List, ReadTime, Tags } from '../../'

// Style
import styles from './styles'

// Style
import { withTheme } from 'styled-components'

export const ArticleDetails = withTheme(
  class ArticleDetails extends Component {
    static propTypes = {
      author: string.isRequired,
      tags: array
    }

    static defaultProps = {
      tags: []
    }

    render () {
      const { author, tags } = this.props

      return (
        <Fragment>

          {/* Article detail */}
          <div className='ArticleDetails'>

            {/* Divider */}
            <Divider />

            {/* List */}
            <List inline unstyled>

              {/* Date / Time */}
              <List.Item>
                <span className='ArticleDetails-icon'>
                  <FontAwesomeIcon icon='calendar-alt' />
                </span>
                <Date date='2018-03-14' />
              </List.Item>

              {/* Author */}
              <List.Item>
                <span className='ArticleDetails-icon'>
                  <FontAwesomeIcon icon='user' />
                </span>
                <Author author={author} />
              </List.Item>

              {/* Read time */}
              <List.Item>
                <span className='ArticleDetails-icon'>
                  <FontAwesomeIcon icon='clock' />
                </span>
                <ReadTime time={2} />
              </List.Item>

            </List>

            {/* Tags */}
            <Tags tags={tags} />

            {/* Divider */}
            <Divider />

            {/* Social */}
            <div className='ArticleDetails-share'>

              <span className='ArticleDetails-shareText'>Share this article</span>

              {/* Facebook */}
              <a className='ArticleDetails-shareIcon' href='javascript:;'>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
              </a>

              {/* Twitter */}
              <a className='ArticleDetails-shareIcon' href='javascript:'>
                <FontAwesomeIcon icon={['fab', 'twitter-square']} />
              </a>

              {/* Pinterest */}
              <a className='ArticleDetails-shareIcon' href='javascript:;'>
                <FontAwesomeIcon icon={['fab', 'pinterest-square']} />
              </a>

            </div>

            {/* Divider */}
            <Divider />

          </div>

          <style jsx>{styles}</style>

        </Fragment>
      )
    }
  }
)
