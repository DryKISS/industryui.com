import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { string, bool, object } from 'prop-types';
// import Holder from 'holderjs'

const ReactHolderJs = ({ src, width, height, usePlaceholder }) => {
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
  };

  if (usePlaceholder) {
    const src = `holder.js/${width}x${height}`

    return <img src={src} ref={placeholderRef} data-src={src} />
  } else {
    return <img src={src} />
  }
}

ReactHolderJs.propTypes = {
  src: string.isRequired,
  usePlaceholder: bool,
  placeholder: object
}

ReactHolderJs.defaultProps = {
  usePlaceholder: false,
  placeholder: {
    /* See https://github.com/imsky/holder#placeholder-options for info on more props and themes */
    theme: 'vine',
    auto: true
  }
}

export default ReactHolderJs
