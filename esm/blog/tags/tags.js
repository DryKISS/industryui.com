import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * Blog - Tags
 * Comile the list of tags for the article details
 *
 * - Slugify these
 * - Unique them
 */
// React
import React from 'react';
import { any, array } from 'prop-types'; // UI

import { Badge, slugify } from '../../';

var TagMap = function TagMap(_ref) {
  var className = _ref.className,
      style = _ref.style,
      tags = _ref.tags;
  tags.map(function (tag, index) {
    return slugify(tag);
  });

  var tagsUnique = _toConsumableArray(new Set(tags));

  return tagsUnique.map(function (tag, index) {
    return /*#__PURE__*/React.createElement(Badge, {
      className: className,
      content: tag,
      key: "".concat(tag, "_").concat(index),
      style: style,
      to: "/blog/tag/".concat(tag)
    });
  });
};

export var BlogTags = function BlogTags(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      tags = _ref2.tags;
  return /*#__PURE__*/React.createElement(TagMap, {
    className: className,
    style: style,
    tags: tags
  });
};
BlogTags.displayName = "BlogTags";
BlogTags.propTypes = {
  className: any,
  style: any,
  tags: array.isRequired
};
//# sourceMappingURL=tags.js.map