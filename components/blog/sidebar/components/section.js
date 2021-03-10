/**
 * Blog - Section
 * Creates a module in the sidebar
 */

// React
import React from 'react'
import { node, string } from 'prop-types'

// UI
import { Divider, Heading } from '../../../'

// Style
import styled from 'styled-components'

export const BlogSection = ({ children, heading }) => (
  <StyledSection>
    {heading && (
      <>
        <StyledHeading content={heading} context="primary" noMargin tag="h3" />
        <Divider size="sm" />
      </>
    )}

    {children}
  </StyledSection>
)

const StyledSection = styled.dl`
  margin-top: 0;
  margin-bottom: 1rem;
`

const StyledHeading = styled(Heading)`
  font-size: 1.25rem;
`

BlogSection.propTypes = {
  children: node.isRequired,
  heading: string
}
