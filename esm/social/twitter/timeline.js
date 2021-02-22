/**
 * Twitter Timeline
 */
// React
import React from 'react';
import { func, object } from 'prop-types'; // import isEqual from 'lodash/isEqual'

import cloneDeep from 'lodash/cloneDeep';
import AbstractWidget from './AbstractWidget';

var TwitterTimeline = function TwitterTimeline(_ref) {
  var dataSource = _ref.dataSource,
      options = _ref.options,
      onLoad = _ref.onLoad;

  // const shouldComponentUpdate = (nextProps) => {
  //   const changed = (name) => !isEqual(this.props[name], nextProps[name])
  //   return changed('dataSource') || changed('options')
  // }
  var ready = function ready(tw, element, done) {
    // Options and dataSource must be cloned since Twitter Widgets modifies it directly
    tw.widgets.createTimeline(cloneDeep(dataSource), element, cloneDeep(options)).then(function () {
      // Widget is loaded
      done();
      onLoad();
    });
  };

  return /*#__PURE__*/React.createElement(AbstractWidget, {
    ready: ready
  });
};

TwitterTimeline.propTypes = {
  dataSource: object.isRequired,
  options: object,
  onLoad: func
};
TwitterTimeline.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
//# sourceMappingURL=timeline.js.map