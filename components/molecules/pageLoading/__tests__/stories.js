/**
 * Page Loading
 */

// React
import React from 'react'

// UI
import { PageLoading, LdsSpinner } from '../../../'

export default {
  component: PageLoading,
  title: 'Molecules/PageLoading'
}

export const main = (args) => <PageLoading {...args} indicator={<LdsSpinner />} />
export const withChildren = (args) => <PageLoading {...args}>Loading...</PageLoading>
