/**
 * Tags
 */

// React
import React, { Component } from 'react'
import { array } from 'prop-types'

// UI
import { Badge } from '../../'

// Style
import { withTheme } from 'styled-components'

export const Tags = withTheme(
  class Tags extends Component {
    static propTypes = {
      tags: array.isRequired
    }

    tags = () => {
      const { tags } = this.props

      return tags.map(({ content, to }, index) =>
        <Badge content={content} key={`${to}_${index}`} to={to} />
      )
    }

    render () {
      return (
        <div className='Tags'>
          {this.tags()}
        </div>
      )
    }
  }
)
