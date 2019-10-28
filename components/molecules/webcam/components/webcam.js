/**
 * Webcam
 */

// React
import React, { Component } from 'react'
import { bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { Design } from './design'

// Style
import { withTheme } from 'styled-components'

const Webcam = withTheme(
  class Webcam extends Component {
    constructor () {
      super()
      this.state = {
        hasUserMedia: false,
        src: ''
      }
    }

    static propTypes = {
      audio: bool,
      onUserMedia: func,
      onUserMediaError: func,
      height: oneOfType([number, string]),
      width: oneOfType([number, string]),
      screenshotFormat: oneOf(['image/webp', 'image/png', 'image/jpeg']),
      style: object,
      className: string,
      screenshotQuality: number,
      screenshotWidth: number
      // audioConstraints: audioConstraintType,
      // videoConstraints: videoConstraintType
    }

    static defaultProps = {
      audio: false,
      className: '',
      height: 463.5,
      onUserMedia: () => {},
      onUserMediaError: () => {},
      screenshotFormat: 'image/webp',
      screenshotQuality: 0.8,
      style: { borderRadius: '.5rem .5rem 0 0' },
      width: 824
    }

    static mountedInstances = []

    static userMediaRequested = false

    componentDidMount () {
      if (!this.hasGetUserMedia()) return

      const { hasUserMedia } = this.state

      Webcam.mountedInstances.push(this)

      if (!hasUserMedia && !Webcam.userMediaRequested) {
        this.requestUserMedia()
      }
    }

    componentWillUpdate (nextProps) {
      const { audioConstraints, videoConstraints } = this.props

      if (
        JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(audioConstraints) ||
        JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(videoConstraints)
      ) {
        this.requestUserMedia()
      }
    }

    componentWillUnmount () {
      const { src } = this.state

      const index = Webcam.mountedInstances.indexOf(this)
      Webcam.mountedInstances.splice(index, 1)

      if (Webcam.mountedInstances.length === 0 && this.state.hasUserMedia) {
        if (this.stream.stop) {
          this.stream.stop()
        } else {
          if (this.stream.getVideoTracks) {
            this.stream.getVideoTracks().map(track => track.stop())
          }
          if (this.stream.getAudioTracks) {
            this.stream.getAudioTracks().map(track => track.stop())
          }
        }
        Webcam.userMediaRequested = false
        window.URL.revokeObjectURL(src)
      }
    }

    hasGetUserMedia = () => {
      return !!(
        navigator.mediaDevices.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
      )
    }

    getScreenshot () {
      const { screenshotFormat, screenshotQuality } = this.props
      const { hasUserMedia } = this.state

      if (!hasUserMedia) return null

      const canvas = this.getCanvas()

      return canvas && canvas.toDataURL(screenshotFormat, screenshotQuality)
    }

    getCanvas () {
      const { screenshotWidth } = this.props
      const { hasUserMedia } = this.state
      const { clientWidth, videoHeight, videoWidth } = this.video

      if (!hasUserMedia || !videoHeight) return null

      if (!this.ctx) {
        const canvas = document.createElement('canvas')
        const aspectRatio = videoWidth / videoHeight

        const canvasWidth = screenshotWidth || clientWidth

        canvas.width = canvasWidth
        canvas.height = canvasWidth / aspectRatio

        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
      }

      const { ctx, canvas } = this
      ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height)

      return canvas
    }

    requestUserMedia () {
      const { audio, audioConstraints, videoConstraints } = this.props

      navigator.getUserMedia =
        navigator.mediaDevices.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia

      const sourceSelected = (audioConstraints, videoConstraints) => {
        // Request video
        const constraints = {
          video: videoConstraints || true
        }

        // Request Audo
        if (audio) {
          constraints.audio = audioConstraints || true
        }

        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {
            Webcam.mountedInstances.forEach(() => this.handleUserMedia(null, stream))
          })
          .catch(e => {
            Webcam.mountedInstances.forEach(() => this.handleUserMedia(e))
          })
      }

      if ('mediaDevices' in navigator) {
        sourceSelected(audioConstraints, videoConstraints)
      } else {
        const optionalSource = id => ({ optional: [{ sourceId: id }] })

        const constraintToSourceId = constraint => {
          const deviceId = (constraint || {}).deviceId

          if (typeof deviceId === 'string') {
            return deviceId
          } else if (Array.isArray(deviceId) && deviceId.length > 0) {
            return deviceId[0]
          } else if (typeof deviceId === 'object' && deviceId.ideal) {
            return deviceId.ideal
          }

          return null
        }

        window.MediaStreamTrack.getSources(sources => {
          let audioSource = null
          let videoSource = null

          sources.forEach(source => {
            if (source.kind === 'audio') {
              audioSource = source.id
            } else if (source.kind === 'video') {
              videoSource = source.id
            }
          })

          const audioSourceId = constraintToSourceId(audioConstraints)
          if (audioSourceId) {
            audioSource = audioSourceId
          }

          const videoSourceId = constraintToSourceId(videoConstraints)
          if (videoSourceId) {
            videoSource = videoSourceId
          }

          sourceSelected(optionalSource(audioSource), optionalSource(videoSource))
        })
      }

      Webcam.userMediaRequested = true
    }

    handleUserMedia = (err, stream) => {
      const { onUserMediaError, onUserMedia } = this.props

      if (err) {
        this.setState({ hasUserMedia: false })
        onUserMediaError(err)
        return
      }

      this.stream = stream

      try {
        this.video.srcObject = stream
        this.setState({ hasUserMedia: true })
      } catch (error) {
        this.setState({
          hasUserMedia: true,
          src: window.URL.createObjectURL(stream)
        })
      }

      onUserMedia()
    }

    render () {
      const { audio, className, height, style, width } = this.props
      const { src } = this.state

      return (
        <video
          autoPlay
          width={width}
          height={height}
          src={src}
          muted={audio}
          className={className}
          playsInline
          style={style}
          ref={ref => {
            this.video = ref
          }}
        />
      )
    }
  }
)

Webcam.Design = Design

export { Webcam }

// const constrainStringType = PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.arrayOf(PropTypes.string),
//   PropTypes.shape({
//     exact: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]),
//   }),
//   PropTypes.shape({
//     ideal: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]),
//   }),
// ]);

// const constrainBooleanType = PropTypes.oneOfType([
//   PropTypes.shape({
//     exact: PropTypes.bool,
//   }),
//   PropTypes.shape({
//     ideal: PropTypes.bool,
//   }),
// ]);

// const constrainLongType = PropTypes.oneOfType([
//   PropTypes.number,
//   PropTypes.shape({
//     exact: PropTypes.number,
//     ideal: PropTypes.number,
//     min: PropTypes.number,
//     max: PropTypes.number,
//   }),
// ]);

// const constrainDoubleType = constrainLongType;

// const audioConstraintType = PropTypes.shape({
//   deviceId: constrainStringType,
//   groupId: constrainStringType,
//   autoGainControl: constrainBooleanType,
//   channelCount: constrainLongType,
//   latency: constrainDoubleType,
//   noiseSuppression: constrainBooleanType,
//   sampleRate: constrainLongType,
//   sampleSize: constrainLongType,
//   volume: constrainDoubleType,
// });

// const videoConstraintType = PropTypes.shape({
//   deviceId: constrainStringType,
//   groupId: constrainStringType,
//   aspectRatio: constrainDoubleType,
//   facingMode: constrainStringType,
//   frameRate: constrainDoubleType,
//   height: constrainLongType,
//   width: constrainLongType,
// });
