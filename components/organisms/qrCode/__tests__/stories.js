/**
 * Components - Organisms  - Qrcode
 */

// React
import React from 'react'

// UI
import Button from '../../../atoms/button/button/button'
import Details from '../../../atoms/details/details'
import { Qrcode, downloadQR } from '../qrcode'
import Readme from '../README.md'

export default {
  args: {
    assetId: 1,
    path: 'http://'
  },
  component: Qrcode,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Qrcode'
}

export const main = (args) => <Qrcode {...args} />

export const withDownload = (args) => {
  let counter = 1

  const toolbar = (
    <Button
      content="Download"
      context="secondary"
      onClick={(e) => {
        e.stopPropagation()
        counter += 1
        downloadQR(counter)
      }}
      size="sm"
    />
  )

  return (
    <Details title="QrCode" open fitParentHeight toolbar={toolbar}>
      <Qrcode {...args} />
    </Details>
  )
}
