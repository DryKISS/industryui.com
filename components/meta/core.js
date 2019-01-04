/**
 * Core
 */

// React
import React, { Component, Fragment } from 'react'
import { string } from 'prop-types'

export class Core extends Component {
  static propTypes = {
    author: string,
    canonical: string.isRequired,
    description: string.isRequired,
    title: string.isRequired
  }

  static defaultProps = {
    author: 'DryKISS'
  }

  render () {
    const { author, canonical, description, title } = this.props

    return (
      <Fragment>

        <title className='next-head'>{title} - {author}</title>

        <meta name='description' content={description} key='description' />
        <meta name='author' content={author} key='author' />
        <meta rel='canonical' href={canonical} key='canonical' />

        <meta name='viewport' content='width=device-width, initial-scale=1' key='viewport' />
        <meta charSet='UTF-8' key='charset' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' key='edge' />
        <meta name='format-detection' content='telephone=no' key='format' />

      </Fragment>
    )
  }
}
