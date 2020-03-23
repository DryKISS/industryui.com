/**
 * Page Loading
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { PageLoading, LdsSpinner } from 'components'

export default {
  title: 'Molecules/PageLoading',
  component: PageLoading,
  decorators: [Wrapper]
}

export const main = () => <PageLoading indicator={<LdsSpinner />} />

export const withChildren = () => <PageLoading>Loading...</PageLoading>
