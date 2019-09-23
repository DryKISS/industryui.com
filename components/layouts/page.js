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
import { node, object, string } from 'prop-types'

// UI
import { Container, MetaHead, PageHeading } from '../'

// Data
import { Brand, Canonical } from 'config'

export const Page = ({ children, heading, meta, strapline }) => {
  return (
    <>
      <MetaHead
        canonical={Canonical}
        brand={Brand.name}
        meta={meta}
      />

      <Container>
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
  strapline: string
}
