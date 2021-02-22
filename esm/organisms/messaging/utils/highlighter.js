// React
import React from 'react';
import { CompositeDecorator } from 'draft-js';

var SearchHighlight = function SearchHighlight(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "search-and-replace-highlight"
  }, props.children);
};

SearchHighlight.displayName = "SearchHighlight";

var findWithRegex = function findWithRegex(regex, contentBlock, callback) {
  var text = contentBlock.getText();
  var matchArr, start, end;

  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    end = start + matchArr[0].length;
    callback(start, end);
  }
};

export var generateDecorator = function generateDecorator(highlightTerm) {
  var regex = new RegExp(highlightTerm, 'g');
  return new CompositeDecorator([{
    strategy: function strategy(contentBlock, callback) {
      if (highlightTerm !== '') {
        findWithRegex(regex, contentBlock, callback);
      }
    },
    component: SearchHighlight
  }]);
};
//# sourceMappingURL=highlighter.js.map