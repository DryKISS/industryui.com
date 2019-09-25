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

export const Page = ({
  brand,
  canonical,
  children,
  heading,
  meta,
  strapline
}) => {
  return (
    <>
      <MetaHead
        canonical={canonical}
        brand={brand.name}
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
  brand: string.isRequired,
  canonical: string.isRequired,
  children: node.isRequired,
  heading: string,
  meta: object.isRequired,
  strapline: string
}
