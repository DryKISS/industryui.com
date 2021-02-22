import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Blog - Tag Cloud
 * List the 20 most prominent tags from all the articles.
 *
 * - Collate all the tags from all the articles
 * - Choose the top 20 most prominent tags
 * - Provide each a weight based on how many there are
 * - Randomly show them in a cloud
 */
// React
import React, { useEffect, useState } from 'react';
import { array, number } from 'prop-types'; // Lodash
// import countBy from 'lodash/countBy'
// UI

import { slugify } from '../../';
import { BlogSection } from './components';
export var BlogTagCloud = function BlogTagCloud(_ref) {
  var articles = _ref.articles,
      total = _ref.total;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      cloud = _useState2[0],
      setCloud = _useState2[1];

  useEffect(function () {
    setCloud(_find());
  }, []);

  var _find = function _find() {
    var tagArray = [];
    articles.forEach(function (_ref2) {
      var tags = _ref2.tags;

      if (!tags) {
        return [];
      }

      var _iterator = _createForOfIteratorHelper(tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          tagArray.push(slugify(tag));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }); // const tagsCounted = countBy(tagArray)
    // Sort
    // const tagsSorted = Object
    //   .entries(tagsCounted)
    //   .sort((a, b) => { return tagsCounted[b] - tagsCounted[a] })
    //   // .map(key => {
    //   //   key
    //   // })
    // newO[key] = list[key]
    // return countBy(tagArray)
    // .filter((article) => {
    //   return (article.category !== 'terms' && article.homepage !== false)
    // })
    // .sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    // .slice(0, total)
    // .map((opt) => ({
    //   tag: 'Deliveroo',
    //   count: 10
    // }))
  }; // const data = [
  //   { value: 'JavaScript', count: 38 },
  //   { value: 'React', count: 30 },
  //   { value: 'Nodejs', count: 28 },
  //   { value: 'Express.js', count: 25 },
  //   { value: 'HTML5', count: 33 },
  //   { value: 'MongoDB', count: 18 },
  //   { value: 'CSS3', count: 20 }
  // ]


  return /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Tags"
  }, cloud);
};
BlogTagCloud.displayName = "BlogTagCloud";
BlogTagCloud.propTypes = {
  articles: array.isRequired,
  total: number
};
BlogTagCloud.defaultProps = {
  total: 5
};
//# sourceMappingURL=tag-cloud.js.map