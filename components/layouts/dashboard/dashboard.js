/**
 * Layout - Dashboard
 *
 */

// React
import { bool, node, object } from 'prop-types'

// UI
import { Alert, LdsSpinner, Page, PageLoading } from '../../'

export const Dashboard = ({ children, resultAlert, isLoading, meta, pageHeading }) => {
  return isLoading ? (
    <PageLoading backgroundColor='#fff' indicator={<LdsSpinner color='#333' />} opacity={1} />
  ) : (
    <>
      <Page children={children} fluid meta={meta} pageHeading={pageHeading} />

      {resultAlert.message && <Alert content={resultAlert.message} context={resultAlert.context} />}
    </>
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
  resultAlert: {
    context: 'success',
    message: ''
  }
}
