/**
 * Components - Organisms - Pricing - Utils
 */
import { LAYOUTS } from '../../../'

export const priceLayoutSizes = (layout) => {
  switch (layout) {
    case LAYOUTS.DESKTOP:
      return {
        featuresTextSize: 'xxs',
        priceCardHeight: '20rem',
        priceCardWidth: '12.75rem',
      }
    case LAYOUTS.MEDDESKTOP:
      return {
        featuresTextSize: 'xs',
        priceCardHeight: '24rem',
        priceCardWidth: '15.25rem',
      }
    case LAYOUTS.LARGEDESKTOP:
      return {
        featuresTextSize: 'xs',
        priceCardHeight: '24rem',
        priceCardWidth: '18.125rem',
      }
    default:
      return {
        featuresTextSize: 'xxs',
        priceCardHeight: '20rem',
        priceCardWidth: '12.75rem',
      }
  }
}
