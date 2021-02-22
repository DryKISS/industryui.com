/**
 * Truncate
 * Truncate the text to a single line
 */
export var Truncate = function Truncate() {
  return "\n  display: inline-block;\n  line-height: initial;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  word-break: break-all;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  ";
}; // TODO: This will be deprecated when we manage it directly in JS.

export var TruncateByMaxHeight = function TruncateByMaxHeight(maxHeight) {
  return "\n    display: inline-block;\n    line-height: 1.4;\n    overflow: hidden;\n    white-space: wrap;\n    max-height: ".concat(maxHeight, ";\n    width: 100%;\n\n  ");
};
//# sourceMappingURL=truncate.js.map