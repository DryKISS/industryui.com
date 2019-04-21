/**
 * Format a price (assuming a two-decimal currency like EUR or USD for simplicity).
 */
export const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)

  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })

  return numberFormat.format(price)
}
