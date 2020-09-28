/**
 * Utils - React Holder
 *
 * @see https://github.com/imsky/holder#placeholder-options for info on more props and themes
 */

// React
import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { string, bool, object } from 'prop-types'

export const ReactHolderJs = ({ src, width, height, usePlaceholder }) => {
  useEffect(() => {
    init()
  }, [src, usePlaceholder])

  const placeholderRef = useRef()

  const init = () => {
    if (!(typeof window !== 'undefined' && window.document)) {
      return
    }

    if (!usePlaceholder) {
      return
    }

    const node = ReactDOM.findDOMNode(placeholderRef.current)

    // require in here to prevent errors during server-side rendering
    const Holder = require('holderjs')

    Holder.run({
      domain: 'holder.js',
      images: node,
      object: null,
      bgnodes: null,
      stylenodes: null
    })
  }

  if (usePlaceholder) {
    const src = `holder.js/${width}x${height}`
    return <img src={src} ref={placeholderRef} data-src={src} />
  } else {
    return <img src={src} />
  }
}

ReactHolderJs.propTypes = {
  placeholder: object,
  src: string.isRequired,
  usePlaceholder: bool
}

ReactHolderJs.defaultProps = {
  placeholder: {
    auto: true,
    theme: 'vine'
  },
  usePlaceholder: false
}
