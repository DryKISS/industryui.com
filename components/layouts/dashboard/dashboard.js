/**
 * Layouts - Dashboard
 */

// React
import React, { Suspense } from 'react'
import { any, bool, node, oneOf, shape, string } from 'prop-types'

// UI
import { Alert } from '../../molecules/alert/components/alert'
import { LdsSpinner } from '../../molecules/pageLoading/components/ldsSpinner'
import { Page } from '../page/page'
import { PageLoading } from '../../molecules/pageLoading/components/pageLoading'
import { Space } from '../../atoms/space/space'
import { THEME_CONTEXT } from '../../theme/constants/context'

export const Dashboard = ({ children, meta, pageHeading, resultAlert, View }) => {
  const { context, message } = resultAlert

  const defaultMeta = {
    description: 'Admin',
    path: '/',
    title: 'Admin',
  }

  const mergedMeta = { ...defaultMeta, ...meta }

  return (
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
  )
}

Dashboard.propTypes = {
  children: node,
  meta: shape({
    description: string,
    path: string,
    title: string,
  }),
  pageHeading: shape({
    center: bool,
    context: oneOf(Object.values(THEME_CONTEXT)),
    divider: bool,
    heading: any.isRequired,
    help: bool,
    helpContent: any,
    strapline: string,
  }),
  resultAlert: shape({
    context: string,
    message: string,
  }),
  View: node,
}

Dashboard.defaultProps = {
  resultAlert: {
    context: 'success',
    message: '',
  },
}
