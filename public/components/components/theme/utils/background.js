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

// background-color: ${props =>
//   (props.primary && '$primary')
//   || (props.danger && '$danger')
//   || ((props.inverted || props.link) && '#fff')
//   || (props.disabled && '$brand-grey')
// };
