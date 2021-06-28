/**
 * Page Loading
 */

// React
import React from 'react'

// UI
import PageLoading from '../pageLoading'
import LdsSpinner from '../ldsSpinner'

export default {
  component: PageLoading,
  title: 'Molecules/PageLoading'
}

export const main = (args) => <PageLoading {...args} indicator={<LdsSpinner />} />
export const withChildren = (args) => <PageLoading {...args}>Loading...</PageLoading>
