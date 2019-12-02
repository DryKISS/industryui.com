/**
 * Page Heading
 */

// React
import { any, bool, element, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, Heading } from '../../'
import { Divider } from '../../atoms/divider'

// Style
import styled from 'styled-components'

export const PageHeading = ({ center, children, context, divider, heading, strapline }) => {
  return (
    <StyledPageHeader center={center} divider={divider}>
      <StyledLeft>
        <StyledHeading content={heading} context='primary' pageHeading />
        {strapline && <div>{strapline}</div>}
      </StyledLeft>

      {children && <StyledRight>{children}</StyledRight>}

      {divider && <StyledDivider size='md' />}
    </StyledPageHeader>
  )
}

const StyledPageHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: ${({ divider }) => !divider && '2rem'};
  margin-top: 1rem;
  text-align: ${({ center }) => center && 'center'};
`

const StyledLeft = styled.span`
  align-items: center;
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: flex-start;
`

const StyledRight = styled.span`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const StyledHeading = styled(Heading)`
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
`

const StyledDivider = styled(Divider)`
  width: 100%;
`

PageHeading.propTypes = {
  center: bool,
  children: element,
  context: oneOf(Object.values(CONTEXT)),
  divider: bool,
  heading: any.isRequired,
  strapline: string
}

PageHeading.defaultProps = {
  center: false,
  context: 'primary',
  divider: true,
  help: false,
  strapline: ''
}
