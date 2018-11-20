/**
 * Breadcrumb
 * Allows a breadcrumb list of two deep
 */
import React, { Component, Fragment } from 'react'
import { string } from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles'

// Style
import { withTheme } from 'styled-components'

export const Breadcrumb = withTheme(
  class Breadcrumb extends Component {
    static propTypes = {
      category: string.isRequired,
      page: string.isRequired,
      path: string.isRequired
    }

    render () {
      const { category, path, page } = this.props
      const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')

      return (
        <Fragment>

          <nav aria-label='breadcrumb'>

            {/* Ordinary list */}
            <ol
              className='Breadcrumb'
              itemScope=''
              itemType='http://schema.org/BreadcrumbList'
            >

              {/* Home link - always static and routes to / */}
              <li
                className='Breadcrumb-item'
                itemProp='itemListElement'
                itemScope=''
                itemType='http://schema.org/ListItem'
              >
                <a
                  className='Breadcrumb-link'
                  href='javascript:;'
                  itemProp='item'
                  itemScope='itemscope'
                  itemType='http://schema.org/Thing'
                >
                  <FontAwesomeIcon icon='home' />
                </a>

                <meta itemProp='position' content='1' />
              </li>

              {/* Category link - Need name and path */}
              <li
                className='Breadcrumb-item'
                itemProp='itemListElement'
                itemScope=''
                itemType='http://schema.org/ListItem'
              >
                <a
                  className='Breadcrumb-link'
                  href={path}
                  itemProp='item'
                  itemScope='itemscope'
                  itemType='http://schema.org/Thing'
                >
                  {categoryFormatted}
                </a>
                <meta itemProp='position' content='2' />
              </li>

              {/* Current page */}
              <li
                aria-current='page'
                className='Breadcrumb-item Breadcrumb--active'
                itemProp='itemListElement'
                itemScope=''
                itemType='http://schema.org/ListItem'
              >
                <span itemProp='name'>{page}</span>
                <meta itemProp='position' content='3' />
              </li>

            </ol>

          </nav>

          <style jsx>{styles}</style>

        </Fragment>
      )
    }
  }
)
