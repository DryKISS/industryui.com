/**
 * Layout - Dashboard
 *
 */

// React
import { bool, node, object } from 'prop-types'

// UI
import { Alert, Page } from '../../'

export const Dashboard = ({ children, error, isLoading, meta, noData, pageHeading, success }) => {
  return (
    !isLoading && (
      <>
        <Page children={children} fluid meta={meta} pageHeading={pageHeading} />

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
  fluid: bool,
  isLoading: bool.isRequired,
  meta: object.isRequired,

  pageHeading: object.isRequired,
  success: bool
}

Dashboard.defaultProps = {
  fluid: false,
  isLoading: true
}
