/**
 * Hero - Buttons
 */

// React
import React from 'react'
import { array } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../atoms/button/button/button'
import Link from '../../../atoms/link/link'

const HeroButtons = ({ buttons }) => {
  return buttons.map(({ content, context, to }, index) => (
    <StyledLink border={false} to={to} key={index}>
      <StyledButton content={content} context={context} size="lg" />
    </StyledLink>
  ))
}

const StyledButton = styled(Button)`
  margin-right: 1rem;
`

const StyledLink = styled(Link)`
  display: inline-block;
`

HeroButtons.propTypes = {
  buttons: array
}

export default HeroButtons
