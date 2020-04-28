/**
 * Layout — Page
 * Allows us to specify some rules for how the page will be rendered
 */

// React
import { bool, node, object, shape, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { Container, MetaHead, PageHeading } from '../../'

// Config
import { Brand, Canonical } from 'config'

export const Page = ({ children, fluid, marginTop, meta, pageHeading }) => {
  return (
    <StyledPage marginTop={marginTop}>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: ${({ theme }) =>
    theme.PAGE.backGroundColour ? theme.PAGE.backGroundColour : theme.COLOUR.white};
  ${({ marginTop }) =>
    marginTop === true &&
    css`
      margin-top: ${({ theme }) => theme.PAGE.marginTop};
    `};
`

Page.propTypes = {
  children: node.isRequired,
  fluid: bool,
  marginTop: bool,
  meta: shape({
    description: string,
    path: string,
    title: string
  }),
  pageHeading: object
}

Page.defaultProps = {
  fluid: false,
  marginTop: false
}
