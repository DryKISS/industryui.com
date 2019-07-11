/**
 * Format a price (assuming a two-decimal currency like EUR or USD for simplicity).
 *
 * Usage
 * {formatPrice(price, 'GBP')}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
export const formatPrice = (amount, currency = 'GBP') => {
  let numberFormat = new Intl.NumberFormat(['en-GB'], {
    currency: currency,
    currencyDisplay: 'symbol',
    style: 'currency'
  })

  return numberFormat.format(amount)
}
