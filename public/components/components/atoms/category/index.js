/**
 * Category
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// UI
import { Link } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Category = withTheme(
  class Category extends Component {
    static propTypes = {
      category: string.isRequired,
      path: string.isRequired
    }

    render () {
      const { category, path } = this.props
      const categoryFormatted = category.toUpperCase().replace('-', ' ')

      return (
        <StyledCategory>

          <Link to={path} passHref>

            <StyledA>
              {categoryFormatted}
            </StyledA>

          </Link>

        </StyledCategory>
      )
    }
  }
)

// Style
const StyledCategory = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
  z-index: 2;
`

const StyledA = styled.a`
  color: ${props => props.theme.COLOUR.primary};
`
