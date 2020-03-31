/**
 * Theme - Variables - Typography
 */
const fontSizeBase = '1rem;'
const fontSizeLg = '($fontSizeBase * 1.25);'
const fontSizeSm = '($fontSizeBase * .875);'

const fonts = {
  monospace: 'monospace',
  sans: '"Muli", sans-serif'
}

const font = fonts.sans
const fontColour = '#6b7a87'

const monospace = fonts.monospace
const fontFamilies = fonts

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const TYPOGRAPHY = {
  fontSizeBase,
  fontSizeLg,
  fontSizeSm,
  font,
  fontColour,
  fontFamilies,
  fontSizes,
  monospace
}
