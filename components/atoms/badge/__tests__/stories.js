/**
 * Badge
 */

// React
import React from 'react'

// UI
import { Badge } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Badge content='Ian Warner' />
export const link = () => <Badge content='Link' to='/example' />
export const icon = () => <Badge content='User' icon='user' />
