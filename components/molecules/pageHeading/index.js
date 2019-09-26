/**
 * Page Heading
 */

// React
import { any, bool, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, Divider, Heading, Icon, MEDIA_QUERY } from '../../'

// Style
import styled from 'styled-components'

export const PageHeading = ({
  center,
  context,
  divider,
  heading,
  help,
  strapline
}) => {
  return (
    <StyledHeader center={center} divider={divider}>

      {help &&
        <StyledHelp>
          <Icon context='help' icon='info-circle' size='2x' />

          <div>
            <a
              id='openIntercom'
              href='mailto:tailwise-8ca42ca9afe1.intercom-mail.com'
            >
              Message
            </a>
            {' '}
            or<br />
            Call on 0330 043 5301
          </div>

        </StyledHelp>}

      <StyledHeading content={heading} context='primary' pageHeading />

      {strapline &&
        <StyledStrapline>{strapline}</StyledStrapline>}

      {divider &&
        <Divider size='md' />}

    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin-bottom: ${({ divider }) => !divider && '2rem'};
  margin-top: 2rem;
  text-align: ${({ center }) => center && 'center'};
`

const StyledHeading = styled(Heading)`
  margin-bottom: .5rem;
`

const StyledStrapline = styled.div`
  ${MEDIA_QUERY.desktop`max-width: 50%;`}
`

const StyledHelp = styled.div`
  float: right;
  margin: .5rem;
  text-align: center;
`

PageHeading.propTypes = {
  center: bool,
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
