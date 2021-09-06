/**
 * Components - Theme - Utils - Font Size
 */

// Utils
import THEME_SIZE from '../../constants/size'

const themeFontSize = ({ size, theme }) => {
  const fontSize = size && Object.values(THEME_SIZE).indexOf(size)

  return `font-size: ${
    fontSize > -1
      ? theme.THEME_TYPOGRAPHY.fontSizes[fontSize] + 'px'
      : theme.THEME_TYPOGRAPHY.fontSizeBase
  };`
}

export default themeFontSize
