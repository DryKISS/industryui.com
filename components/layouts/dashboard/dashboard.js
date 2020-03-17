/**
 * Layout - Dashboard
 */

// React
import React, { Suspense } from 'react'
import { node, object, shape, string } from 'prop-types'

// UI
import { Alert, LdsSpinner, Page, PageLoading } from '../../'

export const Dashboard = ({ children, meta, pageHeading, resultAlert, View }) => {
  const { context, message } = resultAlert

  const defaultMeta = {
    description: 'Admin',
    path: '/',
    title: 'Admin'
  }

  const mergedMeta = { ...defaultMeta, ...meta }

  return (
    <>
      <Suspense
        fallback={
          <PageLoading backgroundColor='#fff' indicator={<LdsSpinner color='#333' />} opacity={1} />
        }
      >
        <>
          <Page children={View || children} fluid meta={mergedMeta} pageHeading={pageHeading} />
          {message && <Alert content={message} context={context} />}
        </>
      </Suspense>
    </>
  )
}

Dashboard.propTypes = {
  children: node,
  meta: shape({
    description: string,
    path: string,
    title: string
  }),
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
