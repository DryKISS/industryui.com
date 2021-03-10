/**
 * Error 404
 */

// React
import React from 'react'

// Layout
import { Page } from '../../layouts/page/page'
import { Text } from '../../atoms/text/text'

export const Error404 = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/404',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heading="404 ERROR PAGE – NOT FOUND" meta={meta}>
      <Text>
        The page you were looking for no longer exists or never did. Please use the links at the top
        of your screen to get back in the game, or click here to go home and start again.
      </Text>
    </Page>
  )
}
