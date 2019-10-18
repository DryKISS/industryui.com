/**
 * Theme - Variables - Typography
 */
const fontSizeBase = '1rem;'
const fontSizeLg = '($fontSizeBase * 1.25);'
const fontSizeSm = '($fontSizeBase * .875);'

const fonts = {
  sans: 'sans-serif'
}

const font = fonts.sans
const fontFamilies = fonts
const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72,
  96
]

const weights = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
]

export const TYPOGRAPHY = {
  fontSizeBase,
  fontSizeLg,
  fontSizeSm,
  font,
  fontFamilies,
  fontSizes,
  monospace,
  weights
}
