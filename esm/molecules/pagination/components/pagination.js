import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Pagination
 */
// React
import React from 'react'; // Style

import styled from 'styled-components'; // Lodash

import chunk from 'lodash/chunk'; // UI

import { PaginationItem } from './';
import { PaginationPropTypes, PaginationDefaultProps } from './props';
export var Pagination = function Pagination(_ref) {
  var breakCount = _ref.breakCount,
      children = _ref.children,
      context = _ref.context,
      currentPage = _ref.currentPage,
      hideWhenOnlyOnePage = _ref.hideWhenOnlyOnePage,
      nextLabel = _ref.nextLabel,
      onPageChange = _ref.onPageChange,
      pageCount = _ref.pageCount,
      prevLabel = _ref.prevLabel,
      showNextAndPrev = _ref.showNextAndPrev,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["breakCount", "children", "context", "currentPage", "hideWhenOnlyOnePage", "nextLabel", "onPageChange", "pageCount", "prevLabel", "showNextAndPrev", "size"]);

  if (!pageCount) {
    return null;
  }

  var handleChange = function handleChange(type) {
    if (type === 'prev') {
      onPageChange(currentPage - 1);
    } else if (type === 'next') {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(type);
    }
  };

  var pagesArray = chunk(Array(pageCount).fill(0).map(function (p, i) {
    return i + 1;
  }), breakCount);
  var currentChunkIndex = pagesArray.findIndex(function (p) {
    return p.includes(currentPage);
  });
  var prevChunk = pagesArray[currentChunkIndex - 1];
  var currentChunk = pagesArray[currentChunkIndex];
  var nextChunk = pagesArray[currentChunkIndex + 1];
  var showPrevDots = currentChunkIndex > 0;
  var showNextDots = pagesArray.length > 1 && currentChunkIndex + 1 < pagesArray.length;
  var showPrevButton = showNextAndPrev && pageCount > 5 && currentPage > 1;
  var showNextButton = showNextAndPrev && pageCount > 5 && currentPage < pageCount;

  var renderContent = function renderContent() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, showPrevButton && /*#__PURE__*/React.createElement(PaginationItem, {
      context: context,
      disabled: currentPage === 1,
      label: prevLabel,
      onClick: function onClick() {
        return handleChange('prev');
      },
      size: size
    }), showPrevDots && /*#__PURE__*/React.createElement(PaginationItem, {
      onClick: function onClick() {
        return handleChange(prevChunk[prevChunk.length - 1]);
      },
      context: context,
      label: "...",
      size: size
    }), currentChunk.map(function (p) {
      return /*#__PURE__*/React.createElement(PaginationItem, {
        active: p === currentPage,
        context: context,
        key: p,
        label: p,
        onClick: function onClick() {
          return handleChange(p);
        },
        size: size
      });
    }), showNextDots && /*#__PURE__*/React.createElement(PaginationItem, {
      onClick: function onClick() {
        return handleChange(nextChunk[0]);
      },
      context: context,
      label: "...",
      size: size
    }), showNextButton && /*#__PURE__*/React.createElement(PaginationItem, {
      context: context,
      disabled: currentPage === pageCount,
      label: nextLabel,
      onClick: function onClick() {
        return handleChange('next');
      },
      size: size
    }));
  };

  if (hideWhenOnlyOnePage && pageCount < 2) {
    return null;
  }

  return /*#__PURE__*/React.createElement(StyledPagination, {
    "aria-label": "Pagination"
  }, children || renderContent());
};
Pagination.displayName = "Pagination";
var StyledPagination = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: 0;\n  list-style: none;\n  width: fit-content;\n  margin: 0 auto;\n"])));
Pagination.propTypes = PaginationPropTypes;
Pagination.defaultProps = PaginationDefaultProps;
//# sourceMappingURL=pagination.js.map