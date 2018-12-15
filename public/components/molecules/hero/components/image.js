/**
 * Hero - Image
 * Displays an image to the right hand side of the main CTA copy
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// UI
import { Column, Image } from '../../../'

// Style
import styled, { withTheme } from 'styled-components'

export const HeroImage = withTheme(
  class HeroImage extends Component {
    static propTypes = {
      alt: string,
      image: string
    }

    render () {
      const { alt, image } = this.props

      return (
        <StyledColumn md={6}>

          <StyledImageContainer>

            <StyledImage alt={alt} src={image} />

          </StyledImageContainer>

        </StyledColumn>
      )
    }
  }
)

// Style
const StyledColumn = styled(Column)`
  align-self: flex-end;
  display: flex;
`

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImage = styled(Image)`
  filter: drop-shadow(0px -3px 6px #aaa);
  margin-bottom: -20px;
  width: 85%;
`
