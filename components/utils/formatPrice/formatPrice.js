/**
 * Format Price
 */
export const formatPrice = (amount, currency = 'GBP') => {
  const numberFormat = new Intl.NumberFormat(['en-GB'], {
    currency: currency,
    currencyDisplay: 'symbol',
    style: 'currency'
  })

  return numberFormat.format(amount)
}
export default formatPrice
