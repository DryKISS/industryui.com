/**
 * Head
 */

// React
import React, { Component } from 'react'
import { object } from 'prop-types'

// Next
import Head from 'next/head'

export class MetaHead extends Component {
  static propTypes = {
    meta: object.isRequired
  }

  render () {
    const { meta } = this.props

    return (
      <Head>

        {/* Core */}
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} key='description' />
        <meta rel='canonical' href={meta.canonical} key='canonical' />

        {/* Facebook */}
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:url' content={meta.canonical} />

        {/* Twitter */}
        <meta name='twitter:url' content={meta.canonical} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />

      </Head>
    )
  }
}
