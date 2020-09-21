import { MEDIA_QUERY } from '../../'

import { css } from 'styled-components'

const sizes = {
  xsSize: '0.25rem',
  smSize: '0.5rem',
  mdSize: '0.75rem',
  lgSize: '1rem',
  xlSize: '1.5rem',
  xxlSize: '2rem'
}

export const spaceStyler = properties => {
  let stl = ''
  let counter = 0
  properties.forEach((_, index) => {
    if (properties[index].v) {
      counter++
      stl += `${properties[index].k}: ${sizes[properties[index].v + 'Size']};
          ${MEDIA_QUERY.desktop`
          ${properties[index].k}: calc(${sizes[properties[index].v + 'Size']} * 2);`}`
    }
  })
  if (counter === 0) {
    return css`
      margin-bottom: ${sizes.mdSize};
      ${MEDIA_QUERY.desktop`
     margin-bottom:  calc(${sizes.mdSize} * 2);`}
    `
  }
  return css`
    ${stl}
  `
}
