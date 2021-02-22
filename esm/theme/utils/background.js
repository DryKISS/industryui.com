/**
 * Components - Theme - Utils - Background
 */
export var themeBackground = function themeBackground(_ref) {
  var context = _ref.context,
      outline = _ref.outline,
      theme = _ref.theme;
  return "background-color: ".concat(outline && 'transparent' || context && theme.COLOUR[context] || theme.COLOUR.dark, ";");
};
//# sourceMappingURL=background.js.map