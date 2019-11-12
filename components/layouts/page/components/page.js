/**
 * Layout - Page
 * Allows us to specify some rules for how the page will be rendered
 */

// React
import { node, object, bool } from 'prop-types'

// styled-components
import styled from 'styled-components'

// UI
import { Container, MetaHead, PageHeading } from '../../../'

// Config
import { Brand, Canonical } from 'config'

export const Page = ({ children, fluid, meta, pageHeading }) => {
  return (
    <StyledPage>
      <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  padding: 30px 0;

  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.lg}px) {
    padding: 30px 10px;
  }
`

Page.propTypes = {
  children: node.isRequired,
  meta: object.isRequired,
  pageHeading: object,
  fluid: bool
}

Page.defaultProps = {
  fluid: false
}
