/**
 * Page Heading
 */

// React
import React, { Component } from 'react'
import { bool, string } from 'prop-types'

// UI
import { Divider, Heading } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const PageHeading = withTheme(
  class PageHeading extends Component {
    static propTypes = {
      divider: bool,
      heading: string.isRequired,
      strapline: string
    }

    render () {
      const { divider, heading, strapline } = this.props

      return (
        <StyledHeader divider={divider}>

          <StyledHeading content={heading} context='primary' pageHeading />

          {strapline && <StyledStrapline>{strapline}</StyledStrapline>}

          {divider && <Divider size='md' />}

        </StyledHeader>
      )
    }
  }
)

// Style
const StyledHeader = styled.header`
  margin-bottom: ${props => !props.divider && '2rem'};
`

const StyledHeading = styled(Heading)`
  margin-bottom: .5rem;
`

const StyledStrapline = styled.div`
  max-width: 50%;
`
