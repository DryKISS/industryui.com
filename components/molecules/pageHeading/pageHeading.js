/**
 * Page Heading
 */

// React
import React from 'react'
import { any, bool, element, oneOf, string } from 'prop-types'

// UI
import { Divider, Heading } from '../../'
import { THEME_CONTEXT } from '../../theme/constants/context'

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

      {(children || help) && (
        <StyledRight>{children || helpContent}</StyledRight>
      )}

      {divider && <StyledDivider size="md" />}
    </StyledPageHeader>
  )
}

const StyledPageHeader = styled.header`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: ${({ divider }) => !divider && '2rem'};
  text-align: ${({ center }) => center && 'center'};
`

const StyledLeft = styled.span`
  flex: 1;
`

const StyledRight = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ divider }) => (!divider ? '0' : '0.5rem')};
`

const StyledDivider = styled(Divider)`
  width: 100%;
`

PageHeading.propTypes = {
  center: bool,
  children: element,
  context: oneOf(Object.values(THEME_CONTEXT)),
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
