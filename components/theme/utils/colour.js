/**
 * Colour
 */
export const COLOUR = ({ context, outline, theme }) => {
  return `color: ${
    (outline && theme.COLOUR[context]) ||
    (context === 'light' && theme.COLOUR.dark) ||
    (context === 'white' && theme.COLOUR.primary) ||
    (context && theme.COLOUR[context]) ||
    theme.COLOUR[context]
  };`
}

/**
 * Useful for hover effects to give a percentage difference
 */
export const SHADE_COLOUR = (colour, percent) => {
  if (colour === '#fff') {
    return '#ecf0f3'
  }

  var R = parseInt(colour.substring(1, 3), 16)
  var G = parseInt(colour.substring(3, 5), 16)
  var B = parseInt(colour.substring(5, 7), 16)

  R = parseInt(R * (100 + percent) / 100)
  G = parseInt(G * (100 + percent) / 100)
  B = parseInt(B * (100 + percent) / 100)

  R = (R < 255) ? R : 255
  G = (G < 255) ? G : 255
  B = (B < 255) ? B : 255

  var RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16))
  var GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16))
  var BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16))

  return '#' + RR + GG + BB
}
