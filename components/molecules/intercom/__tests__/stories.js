/**
 * Intercom
 */

// React
import React from 'react'

// Hero
import { Intercom } from '../intercom'
import Readme from '../README.md'

export default {
  component: Intercom,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Intercom'
}

export const main = () => <Intercom appID="12345" />
