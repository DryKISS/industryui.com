/**
 * Layout - Page
 * Allows us to specify some rules for how the page will be rendered
 *
 * Can we bring in dynamic hooks if we want these things
 *
 * - withAuthentication
 * - withFirebase
 *
 * Which layout to use
 * General meta Tags
 */

// React
import { node, object, string, bool } from 'prop-types'

// UI
import { Container, MetaHead, PageHeading } from 'components'

// Config
import { Brand, Canonical } from 'config'

export const Page = ({
  children,
  heading,
  meta,
  strapline,
  fluidContainer
}) => {
  return (
    <>
      <MetaHead
        canonical={Canonical}
        brand={Brand.name}
        meta={meta}
      />

      <Container fluid={fluidContainer}>
        {heading &&
          <PageHeading heading={heading} strapline={strapline} />}
        {children}
      </Container>
    </>
  )
}

Page.propTypes = {
  children: node.isRequired,
  heading: string,
  meta: object.isRequired,
  strapline: string,
  fluidContainer: bool
}

Page.defaultProps = {
  fluidContainer: false
}
