/**
 * Components - Molecules - Table - Columns
 */
// React
import React, { memo } from 'react';
import { array, bool, func, oneOfType, shape, string } from 'prop-types'; // UI

import { Icon, TableHead } from '../../../';

var RenderColumns = function RenderColumns(_ref) {
  var align = _ref.align,
      columns = _ref.columns,
      setSort = _ref.setSort,
      sort = _ref.sort;
  return columns.map(function (_ref2, index) {
    var hidden = _ref2.hidden,
        sortable = _ref2.sortable,
        _ref2$sortName = _ref2.sortName,
        sortName = _ref2$sortName === void 0 ? '' : _ref2$sortName,
        text = _ref2.text;

    if (hidden) {
      return false;
    }

    var hasSort = sort.item === sortName;

    var handleSort = function handleSort() {
      if (sortable) {
        if (hasSort && sort.order === 'desc') {
          setSort({
            item: null,
            order: null
          });
        } else {
          setSort({
            item: sortName,
            order: hasSort ? 'desc' : 'asc'
          });
        }
      }
    };

    return /*#__PURE__*/React.createElement(TableHead, {
      align: align,
      key: index,
      onClick: handleSort,
      sortable: sortable
    }, text, sortable && hasSort && /*#__PURE__*/React.createElement(Icon, {
      icon: sort.order === 'asc' ? 'caret-down' : 'caret-up',
      prefix: "fas"
    }));
  });
};

export var TableColumns = /*#__PURE__*/memo(function (_ref3) {
  var align = _ref3.align,
      columns = _ref3.columns,
      setSort = _ref3.setSort,
      sort = _ref3.sort;
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(RenderColumns, {
    align: align,
    columns: columns,
    setSort: setSort,
    sort: sort
  })));
});
TableColumns.propTypes = {
  align: oneOfType([string, bool]),
  columns: array,
  setSort: func,
  sort: shape({
    item: string,
    order: string
  })
};
TableColumns.defaultProps = {
  align: false,
  columns: [],
  sort: {}
};
//# sourceMappingURL=columns.js.map