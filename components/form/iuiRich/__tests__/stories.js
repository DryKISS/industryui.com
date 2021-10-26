/**
 * Random Color
 */

// React
import React from 'react'

// UI
import IUIRich from '../iuiRich'
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
  const handleRichInputChange = (e) => {
    console.log(e)
  }
  return <IUIRich onChange={handleRichInputChange} />
}
