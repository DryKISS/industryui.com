/**
 * Components - Theme - Utils - Background
 */
export const themeBackground = ({ context, outline, theme }) => {
  return `background-color: ${
    (outline && 'transparent') || (context && theme.COLOUR[context]) || theme.COLOUR.dark
  };`
}
