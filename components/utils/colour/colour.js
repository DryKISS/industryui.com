/**
 * Components - Utils Colour
 */
export const blendLinearRgb = (p, c1, c2) => {
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

export const shadeLinearRgb = (p, c1) => {
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

export const shadeColor = (color, percent) => {
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = parseInt((R * (100 + percent)) / 100)
  G = parseInt((G * (100 + percent)) / 100)
  B = parseInt((B * (100 + percent)) / 100)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  const RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16)
  const GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16)
  const BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16)

  return '#' + RR + GG + BB
}
