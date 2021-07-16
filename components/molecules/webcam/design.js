/**
 * Webcam design
 */

// React
import React from 'react'

// UI
import Icon from '../../icons/lazyIcon'
import Webcam from './webcam'

const Design = ({ handleReset, handleScreenshot, refProp, screenshot, videoConstraints }) => (
  <>
    <div
      className="text-center"
      style={{
        background: '#000',
        border: '1px solid #C8D1D8',
        borderRadius: '.5rem .5rem 0 0',
        marginBottom: '-8px'
      }}
    >
      {!screenshot && (
        <Webcam ref={refProp} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
      )}

      {screenshot && (
        <img alt="user photo" src={screenshot} style={{ borderRadius: '.5rem .5rem 0 0' }} />
      )}
    </div>

    <div
      style={{
        background: '#C8D1D8',
        borderRadius: '0 0 .5rem .5rem',
        height: '50px',
        position: 'relative'
      }}
    >
      <div
        onClick={screenshot ? handleReset : handleScreenshot}
        style={{
          background: `${!screenshot ? '#04d4cd' : '#e60811'}`,
          border: '2px solid #FFF',
          borderRadius: '50%',
          bottom: '50%',
          cursor: 'pointer',
          height: '50px',
          left: '50%',
          lineHeight: '50px',
          position: 'absolute',
          textAlign: 'center',
          width: '50px'
        }}
      >
        <Icon color="white" icon="camera" style={{ fontSize: '1.5rem' }} />
      </div>
    </div>
  </>
)
export default Design
