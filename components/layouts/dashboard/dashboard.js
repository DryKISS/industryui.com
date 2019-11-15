/**
 * Layout - Dashboard
 *
 */

// React
import { bool, node, object } from 'prop-types'

// UI
import { Alert, Page } from '../../'

export const Dashboard = ({ children, resultAlert, isLoading, meta, noData, pageHeading }) => {
  return (
    !isLoading && (
      <>
        <Page children={children} fluid meta={meta} pageHeading={pageHeading} />

        {resultAlert.message && (
          <Alert content={resultAlert.message} context={resultAlert.context} />
        )}
      </>
    )
  )
}

Dashboard.propTypes = {
  children: node.isRequired,
  isLoading: bool.isRequired,
  meta: object.isRequired,
  pageHeading: object,
  resultAlert: object
}

Dashboard.defaultProps = {
  isLoading: true,
  noData: false,
  resultAlert: {
    context: 'success',
    message: ''
  }
}
