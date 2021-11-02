/**
 * Components - Layouts - Sidebar - Story
 */

// React
import React from 'react'

// UI
import BarLayout from '../bar'
import SidebarLayout from '../sidebar'
import Readme from '../README.md'
import { COPYRIGHT, FOOTER, NAVIGATION } from '../__mocks__/sidebar'

export default {
  component: SidebarLayout,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Layouts/Sidebar'
}

export const Main = () => (
  <SidebarLayout brand="DryKISS" copyright={COPYRIGHT} footer={FOOTER} Navigation={NAVIGATION}>
    <>HERE</>
  </SidebarLayout>
)

export const Bar = () => (
  <BarLayout brand="DryKISS" copyright={COPYRIGHT} footer={FOOTER} Navigation={NAVIGATION}>
    <>HERE</>
  </BarLayout>
)
