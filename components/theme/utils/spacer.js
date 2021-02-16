/**
 * Components - Theme - Utils - Font Size
 */

// React
import { number, bool } from 'prop-types'

export const SPACER_FORMULA = factor => factor * 4

export const SPACING = (...nums) => {
  const amount = 4
  return nums.reduce((output, n) => `${output}${n * amount}${n > 0 ? 'px' : ''} `, '')
}

export const SPACER = ({ m, m0, mx, my, mt, mb, mr, ml, mAuto, p, p0, px, py, pt, pb, pr, pl }) => {
  let temp = ''

  if (m) {
    temp += `margin: ${SPACER_FORMULA(m)}px !important;`
  }

  if (m0) {
    temp += 'margin: 0 !important;'
  }

  if (mx) {
    temp += `margin: 0 ${SPACER_FORMULA(mx)}px !important;`
  }

  if (my) {
    temp += `margin: ${SPACER_FORMULA(my)}px 0 !important;`
  }

  if (mt) {
    temp += `margin-top: ${SPACER_FORMULA(mt)}px !important;`
  }

  if (mb) {
    temp += `margin-bottom: ${SPACER_FORMULA(mb)}px !important;`
  }

  if (mr) {
    temp += `margin-right: ${SPACER_FORMULA(mr)}px !important;`
  }

  if (ml) {
    temp += `margin-left: ${SPACER_FORMULA(ml)}px !important;`
  }

  if (mAuto) {
    temp += 'margin: auto !important;'
  }

  if (p) {
    temp += `padding: ${SPACER_FORMULA(p)}px !important;`
  }

  if (p0) {
    temp += 'padding: 0 !important;'
  }

  if (px) {
    temp += `padding: 0 ${SPACER_FORMULA(px)}px !important;`
  }

  if (py) {
    temp += `padding: ${SPACER_FORMULA(py)}px 0 !important;`
  }

  if (pt) {
    temp += `padding-top: ${SPACER_FORMULA(pt)}px !important;`
  }

  if (pb) {
    temp += `padding-bottom: ${SPACER_FORMULA(pb)}px !important;`
  }

  if (pr) {
    temp += `padding-right: ${SPACER_FORMULA(pr)}px !important;`
  }

  if (pl) {
    temp += `padding-left: ${SPACER_FORMULA(pl)}px !important;`
  }

  return temp
}

export const SPACER_PROP_TYPES = {
  m: number,
  m0: bool,
  mx: number,
  my: number,
  mt: number,
  mb: number,
  mr: number,
  ml: number,
  mAuto: bool,
  p: number,
  p0: bool,
  px: number,
  py: number,
  pt: number,
  pb: number,
  pr: number,
  pl: number
}
