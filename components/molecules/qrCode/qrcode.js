/**
 * Components - Molecules - Qrcode
 */

// React
import React from 'react'
import { bool, number, string } from 'prop-types'

// QrCode
import QRCode from 'qrcode.react'

// Style
import styled from 'styled-components'

const Qrcode = ({ assetId, includeMargin, level, path, renderAs, size }) => {
  const downloadQR = () => {
    console.log('HERE')
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
    <StyledQRContainer id={`qr${assetId}`} onClick={downloadQR}>
      <QRCode
        bgColor="#ffffff"
        fgColor="#000000"
        includeMargin={includeMargin}
        // imageSettings={{
        //   src: 'https://admin.cleverly.works/static/logo/cleverly-mark-logo.svg',
        //   x: null,
        //   y: null,
        //   height: 36,
        //   width: 24,
        //   excavate: true
        // }}
        level={level}
        renderAs={renderAs}
        size={size}
        value={path}
      />
    </StyledQRContainer>
  )
}

const StyledQRContainer = styled.div`
  cursor: pointer;
  text-align: center;
`

Qrcode.propTypes = {
  assetId: number.isRequired,
  includeMargin: bool,
  level: string,
  path: string.isRequired,
  renderAs: string,
  size: number
}

Qrcode.defaultProps = {
  includeMargin: false,
  level: 'H',
  renderAs: 'canvas',
  size: 256
}

export default Qrcode
