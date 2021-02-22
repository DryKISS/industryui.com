import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Components - Molecules - Table - Rows
 */
// React
import React, { memo } from 'react';
import { array, bool, func, oneOfType, string } from 'prop-types'; // UI

import { TableData, TableRow } from '../../../';
export var TableRows = /*#__PURE__*/memo(function (_ref) {
  var align = _ref.align,
      columns = _ref.columns,
      hover = _ref.hover,
      rowClick = _ref.rowClick,
      rows = _ref.rows,
      striped = _ref.striped;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    var row = e.currentTarget.getAttribute('data-item');
    rowClick(JSON.parse(row));
  };

  var clickable = typeof rowClick === 'function';
  return rows.map(function (row, index) {
    var context = row.context;
    delete row.context;

    if (row.hidden) {
      return null;
    } else {
      delete row.hidden;
    }

    return /*#__PURE__*/React.createElement(TableRow, {
      context: context,
      "data-item": JSON.stringify(row),
      hover: hover,
      key: index,
      onClick: clickable ? handleClick : null,
      pointer: clickable,
      striped: striped
    }, Object.entries(row).map(function (_ref2, index) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      var length = columns.length;
      var column = columns[index];

      if (length && column.hidden) {
        return false;
      }

      var renderValue = typeof value === 'function' ? value() : value;
      return /*#__PURE__*/React.createElement(TableData, {
        align: align,
        key: index
      }, length > 0 && column.formatter ? column.formatter({
        row: row,
        data: column.formatterData
      }) : value && value.__html ? /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: value
      }) : renderValue);
    }));
  });
});
TableRows.propTypes = {
  align: oneOfType([string, bool]),
  columns: array,
  hover: bool,
  rowClick: func,
  rows: array.isRequired,
  striped: bool
};
TableRows.defaultProps = {
  align: false,
  columns: [],
  hover: true,
  striped: true
};
//# sourceMappingURL=rows.js.map