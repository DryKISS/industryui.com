/**
 * Components - Theme - Utils - Colour
 */
export var themeColour = function themeColour(_ref) {
  var context = _ref.context,
      outline = _ref.outline,
      theme = _ref.theme;
  return "color: ".concat(outline && theme.COLOUR[context] || context === 'light' && theme.COLOUR.dark || context === 'white' && theme.COLOUR.primary || context && theme.COLOUR[context] || theme.COLOUR[context], ";");
};
//# sourceMappingURL=colour.js.map