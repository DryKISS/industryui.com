/**
 * Components - Molecules  - QrCode
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// QrCode
import QRCode from 'qrcode.react'

// Style
import styled from 'styled-components'

// UI
import { Details } from '../../atoms/details/details'

export const QrCode = ({ assetId, path }) => {
  const downloadQR = () => {
    const canvas = document.querySelector(`#qr${assetId} > canvas`)
    const pngUrl = canvas.toDataURL()

    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = `${assetId}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <Details button='Download' handleClick={downloadQR} open summary='QR Code'>
      <StyledQRContainer id={`qr${assetId}`}>
        <QRCode
          bgColor='#ffffff'
          fgColor='#000000'
          includeMargin={false}
          // imageSettings={{
          //   src: 'https://admin.cleverly.works/static/logo/cleverly-mark-logo.svg',
          //   x: null,
          //   y: null,
          //   height: 36,
          //   width: 24,
          //   excavate: true
          // }}
          level='H'
          renderAs='canvas'
          size={256}
          value={`${path}`}
        />
      </StyledQRContainer>
    </Details>
  )
}

const StyledQRContainer = styled.div`
  cursor: pointer;
  text-align: center;
`

QrCode.propTypes = {
  assetId: number.isRequired,
  path: string.isRequired
}
