/**
 * Layout - Dashboard
 *
 */

// React
import { bool, node, object, string } from 'prop-types'

// UI
import { Alert, ContentWrapper, FluidContainer, MetaHead, PageHeading, SidebarWrapper } from '../'

// Config
import { Brand, Canonical } from 'config'


export const Dashboard = ({
  children,
  error,
  heading,
  isLoading,
  meta,
  Sidebar,
  strapline,
  success
}) => {
  return !isLoading && (
    <>
      <MetaHead
        canonical={Canonical}
        brand={Brand.name}
        meta={meta}
      />

      <FluidContainer>

        <SidebarWrapper>

          <Sidebar />

        </SidebarWrapper>

        <ContentWrapper>

          {heading &&
            <PageHeading heading={heading} strapline={strapline} />}

            {children}

            {success &&
              <Alert content='Details Saved. Please continue with the next section.' context='success' />}

            {error &&
              <Alert content={`Error: ${error.message}`} context='warning' />}

        </ContentWrapper>

      </FluidContainer>

    </>
  )
}

Dashboard.propTypes = {
  children: node.isRequired,
  error: object,
  heading: string,
  meta: object.isRequired,
  strapline: string,
  success: bool
}
