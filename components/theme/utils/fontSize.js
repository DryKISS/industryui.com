/**
 * Components - Theme - Utils - Font Size
 */

// Utils
import { THEME_SIZE } from '../../'

export const themeFontSize = ({ size, theme }) => {
  const fontSize = size && Object.values(THEME_SIZE).indexOf(size)

  return `font-size: ${
    fontSize > -1 ? theme.TYPOGRAPHY.fontSizes[fontSize] + 'px' : theme.TYPOGRAPHY.fontSizeBase
  };`
}
