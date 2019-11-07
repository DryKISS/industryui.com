/**
 * Layout - Page
 * Allows us to specify some rules for how the page will be rendered
 */

// React
import { node, object, bool } from 'prop-types'

// UI
import { Container, MetaHead, PageHeading } from '../../../'

// Config
import { Brand, Canonical } from 'config'

export const Page = ({ children, fluid, meta, pageHeading }) => {
  return (
    <>
      <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>
    </>
  )
}

Page.propTypes = {
  children: node.isRequired,
  meta: object.isRequired,
  pageHeading: object,
  fluid: bool
}

Page.defaultProps = {
  fluid: false
}
