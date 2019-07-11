/**
 * Blog Section
 * Creates a module in the sidebar
 */

// React
import { node, string } from 'prop-types'

// UI
import { Divider, Heading } from '../../../'

// Style
import styled from 'styled-components'

export const BlogSection = ({ children, heading }) => {
  return (
    <StyledSection>

      <Heading
        content={heading}
        context='primary'
        noMargin tag='h2'
      />

      <Divider size='sm' />

      {children}

    </StyledSection>
  )
}

BlogSection.propTypes = {
  children: node.isRequired,
  heading: string.isRequired
}

const StyledSection = styled.dl`
  margin-top: 0;
  margin-bottom: 1rem;
`
