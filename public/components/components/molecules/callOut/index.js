/**
 * Callout
 */

// React
import React, { Component } from 'react'

// UI
import { Button, Link } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Callout = withTheme(
  class Callout extends Component {
    renderButton = (to, text) => {
      return (
        <Link to={to}>
          <Button context='accent'>{text}</Button>
        </Link>
      )
    }

    render () {
      return (
        <StyledCallout>

          <StyledWrapper>

            {this.renderButton('/dogs/litters', 'View available dogs')}

            <StyledSeperator>or</StyledSeperator>

            {this.renderButton('/sign-up/breeder', 'Become a Tailwise breeder')}

          </StyledWrapper>

        </StyledCallout>
      )
    }
  }
)

// Style
const StyledCallout = styled.section`
  background-color: #0679d8;
  background-image: url(/static/svg/pattern-white.svg);
  background-repeat: repeat;
  background-size: 40%;
  display: flex;
  margin-top: 2rem;
  padding: 2rem 0;

  @media (min-width: 760px) {
    background-size: 7%;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 760px) {
    display: inline-flex;
    flex-direction: row;
  }
`

const StyledSeperator = styled.div`
  color: #fff;
  margin: 16px 0 !important;
  text-align: center;

  @media (min-width: 760px) {
    margin: auto 24px !important;
  }
`
