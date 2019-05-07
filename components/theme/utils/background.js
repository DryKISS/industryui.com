/**
 * Background colour
 */
export const BACKGROUND = ({ context, outline, theme }) => {
  return `background-color: ${
    (outline && 'transparent') ||
    (context && theme.COLOUR[context]) ||
    theme.COLOUR.dark
  };`
}
