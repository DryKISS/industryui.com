/**
 * Progress
 */

// React
import React, { Component, Fragment } from 'react'
import { number } from 'prop-types'

// Style
import styles from './styles'

// Style
import { withTheme } from 'styled-components'

export const Progress = withTheme(
  class Progress extends Component {
    static propTypes = {
      width: number
    }

    render () {
      const { width } = this.props

      return (
        <Fragment>

          <div className='Progress'>

            <div
              aria-valuenow='width'
              aria-valuemin='0'
              aria-valuemax='100'
              className='Progress-bar'
              role='progressbar'
              style={{ width: `${width}%` }}
            />

          </div>

          <style jsx>{styles}</style>

        </Fragment>
      )
    }
  }
)
