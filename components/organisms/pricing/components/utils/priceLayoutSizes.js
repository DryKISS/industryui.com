/**
 * Components - Organisms - Pricing - Utils
 */

// UI
import LAYOUTS from '../constants'

const priceLayoutSizes = (layout) => {
  switch (layout) {
    case LAYOUTS.DESKTOP:
      return {
        featuresTextSize: 'xs',
        priceCardHeight: '20rem',
        priceCardWidth: '12.75rem'
      }
    case LAYOUTS.MEDDESKTOP:
      return {
        featuresTextSize: 'xs',
        priceCardHeight: '24rem',
        priceCardWidth: '15.25rem'
      }
    case LAYOUTS.LARGEDESKTOP:
      return {
        featuresTextSize: 'xs',
        priceCardHeight: '24rem',
        priceCardWidth: '18.125rem'
      }
    default:
      return {
        featuresTextSize: 'xs',
        priceCardHeight: '20rem',
        priceCardWidth: '12.75rem'
      }
  }
}

export default priceLayoutSizes
