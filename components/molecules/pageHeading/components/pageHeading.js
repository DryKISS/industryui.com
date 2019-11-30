/**
 * Page Heading
 */

// React
import { any, bool, oneOf, string, element } from 'prop-types'

// UI
import { CONTEXT, Heading } from '../../..'
import { Divider } from '../../../atoms/divider'

// Style
import styled from 'styled-components'

export const PageHeading = ({
  center,
  children,
  context,
  divider,
  heading,
  help,
  helpContent,
  strapline
}) => {
  return (
    <StyledPageHeader center={center} divider={divider}>
      <StyledLeft>
        <StyledHeading content={heading} context={context} pageHeading />
        {strapline && <div>{strapline}</div>}
      </StyledLeft>

      {(children || help) && <StyledRight>{children || helpContent}</StyledRight>}

      {divider && <StyledDivider size='md' />}
    </StyledPageHeader>
  )
}

const StyledPageHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ divider }) => !divider && '2rem'};
  margin-top: 1rem;
  text-align: ${({ center }) => center && 'center'};
`

const StyledLeft = styled.span`
  flex: 1;
`

const StyledRight = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const StyledHeading = styled(Heading)`
  margin-bottom: 0.5rem;
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
  help: bool,
  helpContent: any,
  strapline: string
}

PageHeading.defaultProps = {
  center: false,
  context: 'primary',
  divider: true,
  help: false,
  helpContent: '',
  strapline: ''
}
