/**
 * Components - Theme - Utils - Background
 */

const themeBackground = ({ context, outline, theme }) => {
  return `background-color: ${
    (outline && 'transparent') || (context && theme.COLOUR[context]) || theme.COLOUR.dark
  };`
}

export default themeBackground
