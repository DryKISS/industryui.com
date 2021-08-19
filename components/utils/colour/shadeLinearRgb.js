/**
 * Components - Utils - Colour - Shade Linear RGB
 */
const shadeLinearRgb = (p, c1) => {
  const i = parseInt
  const r = Math.round
  const [a, b, c, d] = c1.split(',')

  let P = p < 0
  const t = P ? 0 : 255 * p
  P = P ? 1 + p : 1 - p

  return (
    'rgb' +
    (d ? 'a(' : '(') +
    r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + t) +
    ',' +
    r(i(b) * P + t) +
    ',' +
    r(i(c) * P + t) +
    (d ? ',' + d : ')')
  )
}

export default shadeLinearRgb
