/**
 * Press
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// UI
import { Image, List } from '../../'

// Style
import { withTheme } from 'styled-components'

export const Press = withTheme(
  class Press extends Component {
    static propTypes = {
      heading: string.isRequired
    }

    render () {
      const { heading } = this.props

      return (
        <section>

          <h1 className='Press-heading'>{heading}</h1>

          <List className='Press-list' inline unstyled>

            <List.Item className='d-none d-md-block'>
              <Image alt='Pet Gazette logo' src='/static/svg/press/pet-gazette.svg' />
            </List.Item>

            <List.Item>
              <Image alt='BBC logo' src='/static/svg/press/bbc.svg' />
            </List.Item>

            <List.Item className='d-none d-md-block'>
              <Image alt='Mirror logo' src='/static/svg/press/mirror.svg' />
            </List.Item>

            <List.Item className='d-none d-md-block'>
              <Image alt='TNW' src='/static/svg/press/tnw.svg' />
            </List.Item>

            <List.Item className='d-none d-md-block'>
              <Image alt='Evening Standard logo' src='/static/svg/press/evening-standard.svg' />
            </List.Item>

          </List>

        </section>
      )
    }
  }
)

// export default css`
//   .Press-heading {
//     font-size: 1.125rem;
//     font-weight: 400;
//     line-height: 1.5;
//     margin: 0 auto 2rem;
//     width: 60%;
//   }

//   :global(.Press-list) {
//     margin-bottom: 4rem;
//   }
//   `
