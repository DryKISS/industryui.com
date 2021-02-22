/**
 * Format Price
 */
export var formatPrice = function formatPrice(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GBP';
  var numberFormat = new Intl.NumberFormat(['en-GB'], {
    currency: currency,
    currencyDisplay: 'symbol',
    style: 'currency'
  });
  return numberFormat.format(amount);
};
//# sourceMappingURL=index.js.map