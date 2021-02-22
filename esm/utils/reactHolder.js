/**
 * Components - Utils - React Holder
 *
 * @see https://github.com/imsky/holder#placeholder-options for info on more props and themes
 */
// React
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { string, bool, object } from 'prop-types';
export var ReactHolderJs = function ReactHolderJs(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      usePlaceholder = _ref.usePlaceholder;
  useEffect(function () {
    init();
  }, [src, usePlaceholder]);
  var placeholderRef = useRef();

  var init = function init() {
    if (!(typeof window !== 'undefined' && window.document)) {
      return;
    }

    if (!usePlaceholder) {
      return;
    }

    var node = ReactDOM.findDOMNode(placeholderRef.current); // require in here to prevent errors during server-side rendering

    var Holder = require('holderjs');

    Holder.run({
      domain: 'holder.js',
      images: node,
      object: null,
      bgnodes: null,
      stylenodes: null
    });
  };

  if (usePlaceholder) {
    var _src = "holder.js/".concat(width, "x").concat(height);

    return /*#__PURE__*/React.createElement("img", {
      src: _src,
      ref: placeholderRef,
      "data-src": _src
    });
  } else {
    return /*#__PURE__*/React.createElement("img", {
      src: src
    });
  }
};
ReactHolderJs.propTypes = {
  placeholder: object,
  src: string.isRequired,
  usePlaceholder: bool
};
ReactHolderJs.defaultProps = {
  placeholder: {
    auto: true,
    theme: 'vine'
  },
  usePlaceholder: false
};
//# sourceMappingURL=reactHolder.js.map