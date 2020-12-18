/**
 * Layout - Dashboard
 */

// React
import { Suspense } from 'react'
import { any, bool, node, oneOf, shape, string } from 'prop-types'

// UI
import { Alert, CONTEXT, LdsSpinner, Page, PageLoading, Space } from '../../'

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
      <Suspense fallback={<PageLoading indicator={<LdsSpinner />} />}>
        <Page fluid meta={mergedMeta} pageHeading={pageHeading}>
          {View || children}

          {message && (
            <>
              <Space />
              <Alert content={message} context={context} />
            </>
          )}
        </Page>
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
  pageHeading: shape({
    center: bool,
    context: oneOf(Object.values(CONTEXT)),
    divider: bool,
    heading: any.isRequired,
    help: bool,
    helpContent: any,
    strapline: string
  }),
  resultAlert: shape({
    context: string,
    message: string
  }),
  View: node
}
