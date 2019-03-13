/**
 * Page Heading
 */

// React
import { bool, string } from 'prop-types'

// UI
import { Divider, Heading } from '../../'

// Style
import styled from 'styled-components'

export const PageHeading = ({ center, divider, heading, strapline }) => {
  return (
    <StyledHeader center={center} divider={divider}>

      <StyledHeading content={heading} context='primary' pageHeading />

      {strapline && <StyledStrapline>{strapline}</StyledStrapline> }

      {divider && <Divider size='md' /> }

    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin-bottom: ${({ divider }) => !divider && '2rem'};
  text-align: ${({ center }) => center && 'center'};
`

const StyledHeading = styled(Heading)`
  margin-bottom: .5rem;
`

const StyledStrapline = styled.div`
  max-width: 50%;
`

PageHeading.propTypes = {
  center: bool,
  divider: bool,
  heading: string.isRequired,
  strapline: string
}
