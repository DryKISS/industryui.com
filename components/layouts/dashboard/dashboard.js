/**
 * Layout - Dashboard
 *
 */

// React
import React, { Suspense } from 'react'
import { node, object, shape, string } from 'prop-types'

// UI
import { Alert, LdsSpinner, Page, PageLoading } from '../../'

export const Dashboard = ({ children, resultAlert, meta, pageHeading, View, viewProps }) => {
  const { context, message } = resultAlert

  return (
    <>
      <Suspense
        fallback={
          <PageLoading backgroundColor='#fff' indicator={<LdsSpinner color='#333' />} opacity={1} />
        }
      >
        <>
          <Page children={View || children} fluid meta={meta} pageHeading={pageHeading} />
          {message && <Alert content={message} context={context} />}
        </>
      </Suspense>
    </>
  )
}

Dashboard.propTypes = {
  children: node.isRequired,
  meta: object.isRequired,
  pageHeading: object,
  resultAlert: shape({
    context: string,
    message: string
  })
}

Dashboard.defaultProps = {
  resultAlert: {
    context: 'success',
    message: ''
  }
}
