/**
 * Layout - Page
 * Allows us to specify some rules for how the page will be rendered
 */

// React
import { bool, node, object, shape, string } from 'prop-types'

// styled-components
import styled from 'styled-components'

// UI
import { Container, MetaHead, PageHeading } from '../../../'

// Config
import { Brand, Canonical } from 'config'

export const Page = ({ children, fluid, meta, pageHeading }) => {
  return (
    <StyledPage>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: rgb(245, 248, 250);
  padding: 30px 0;

  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.lg}px) {
    padding: 1rem 0.5rem;
  }
`

Page.propTypes = {
  children: node.isRequired,
  fluid: bool,
  meta: shape({
    description: string,
    path: string,
    title: string
  }),
  pageHeading: object
}

Page.defaultProps = {
  fluid: false
}
