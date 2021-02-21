// React
import React from 'react';
import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';
export var createHashtagPlugin = function createHashtagPlugin() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var DecoratedHashtag = function DecoratedHashtag(props) {
    return /*#__PURE__*/React.createElement(Hashtag, props);
  };

  return {
    decorators: [{
      strategy: hashtagStrategy,
      component: DecoratedHashtag
    }]
  };
};
//# sourceMappingURL=index.js.map