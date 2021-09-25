/**
 * Components - Utils - Holder
 *
 * @see https://github.com/imsky/holder
 */

// React
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { number, oneOf, string } from 'prop-types'

const Holder = ({
  align,
  bg,
  fg,
  font,
  height,
  lineWrap,
  outline,
  random,
  size,
  text,
  theme,
  width
}) => {
  useEffect(() => {
    init()
  })

  const placeholderRef = useRef()

  const init = () => {
    if (!(typeof window !== 'undefined' && window.document)) {
      return
    }

    const node = ReactDOM.findDOMNode(placeholderRef.current)

    const holderJs = require('holderjs')

    holderJs.run({
      bgnodes: null,
      domain: 'holder.js',
      images: node,
      object: null,
      renderer: 'svgcanvas',
      stylenodes: null
    })
  }

  let path = `holder.js/${width}x${height}?`
  path += `align=${align}&bg=${bg}&fg=${fg}&lineWrap=${lineWrap}`
  path += `&outline=${outline}&random=${random}&size=${size}&theme=${theme}`
  path += text ? `&text=${text}` : `&text=${width}x${height}`

  return <img data-src={`${path}`} ref={placeholderRef} />
}

Holder.propTypes = {
  align: oneOf(['center', 'left', 'right']),
  bg: string,
  fg: string,
  font: string,
  height: number,
  lineWrap: number,
  outline: oneOf(['yes', 'no']),
  random: oneOf(['yes', 'no']),
  size: number,
  text: string,
  theme: oneOf(['sky', 'vine', 'lava', 'gray', 'industrial', 'social']),
  width: number
}

Holder.defaultProps = {
  align: 'center',
  height: 422,
  lineWrap: 0.5,
  outline: 'no',
  random: 'no',
  size: 50,
  theme: 'industrial',
  width: 750
}

export default Holder
