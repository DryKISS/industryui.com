/**
 * Colour
 */
export const COLOUR = ({ context, outline, theme }) => {
  return `color: ${(outline && theme.COLOUR[context]) ||
    (context === 'light' && theme.COLOUR.dark) ||
    (context === 'white' && theme.COLOUR.primary) ||
    (context && theme.COLOUR[context]) ||
    theme.COLOUR[context]};`
}
