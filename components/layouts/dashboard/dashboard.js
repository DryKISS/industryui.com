/**
 * Layout - Dashboard
 *
 */

// React
import { bool, node, object } from 'prop-types'

// UI
import { Alert, MetaHead, PageHeading } from '../../'

// Config
import { Brand, Canonical } from 'config'

export const Dashboard = ({ children, error, isLoading, meta, noData, pageHeading, success }) => {
  return (
    !isLoading && (
      <>
        <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />

        {pageHeading && <PageHeading {...pageHeading} />}

        {children}

        {success && (
          <Alert
            content='Details Saved. Please continue with the next section.'
            context='success'
          />
        )}

        {error && <Alert content={`Error: ${error.message}`} context='warning' />}
      </>
    )
  )
}

Dashboard.propTypes = {
  children: node.isRequired,
  error: object,
  isLoading: bool.isRequired,
  meta: object.isRequired,
  noData: bool,
  pageHeading: object.isRequired,
  success: bool
}

Dashboard.defaultProps = {
  isLoading: true,
  noData: false
}
