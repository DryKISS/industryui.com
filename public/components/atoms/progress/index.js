/**
 * Progress
 */

// React
import React, { Component } from 'react'
import { number } from 'prop-types'

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
      )
    }
  }
)

//   .Progress {
//     background-color: #e9ecef;
//     border-radius: .25rem;
//     display: flex;
//     font-size: .75rem;
//     height: 1rem;
//     margin-top: 1rem;
//     overflow: hidden;
//     width: 100%;
//   }

//   .Progress-bar {
//     background-color: #0679d8;
//     color: #fff;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//     transition: width .6s ease;
//     white-space: nowrap;
//   }
