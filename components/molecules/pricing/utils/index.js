import { LAYOUTS } from 'components'

export const priceLayoutSizes = layout => {
  switch (layout) {
    case LAYOUTS.DESKTOP:
      return {
        priceCardWidth: '12.75rem',
        featuresTextSize: 'xxs'
      }
    case LAYOUTS.MEDDESKTOP:
      return {
        priceCardWidth: '15.25rem',
        featuresTextSize: 'xs'
      }
    default:
      return {
        priceCardWidth: '12.75rem',
        featuresTextSize: 'xxs'
      }
  }
}
