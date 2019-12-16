import { SIZE } from '../../../'

export const FONTSIZE = ({ size, theme }) => {
  const fontSize = size && Object.values(SIZE).indexOf(size)
  return `font-size: ${
    fontSize > -1 ? theme.TYPOGRAPHY.fontSizes[fontSize] + 'px' : theme.TYPOGRAPHY.fontSizeBase
  };`
}
