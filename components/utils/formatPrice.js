/**
 * Format a price (assuming a two-decimal currency like EUR or USD for simplicity).
 */
export const formatPrice = (amount, currency = 'GBP') => {
  const numberFormat = new Intl.NumberFormat(['en-GB'], {
    currency: currency,
    currencyDisplay: 'symbol',
    style: 'currency'
  })

  return numberFormat.format(amount)
}
