/**
 * Components - Utils - Colour - Blend Linear RGB
 */
const blendLinearRgb = (p, c1, c2) => {
  const i = parseInt
  const r = Math.round
  const P = 1 - p
  const [a, b, c, d] = c1.split(',')
  const [e, f, g, h] = c2.split(',')
  const x = d || h

  const j = x
    ? ',' + (!d ? h : !h ? d : r((parseFloat(d) * P + parseFloat(h) * p) * 1000) / 1000 + ')')
    : ')'

  return (
    'rgb' +
    (x ? 'a(' : '(') +
    r(
      i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + i(e[3] === 'a' ? e.slice(5) : e.slice(4)) * p
    ) +
    ',' +
    r(i(b) * P + i(f) * p) +
    ',' +
    r(i(c) * P + i(g) * p) +
    j
  )
}

export default blendLinearRgb
