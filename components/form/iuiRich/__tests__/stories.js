/**
 * Random Color
 */

// React
import React from 'react'

// UI
import { IUIRich } from '../index'
import Readme from '../README.md'

export default {
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  title: 'Form/IUIRichEditor'
}

export const IUIRichEditor = () => {
  return <IUIRich />
}
