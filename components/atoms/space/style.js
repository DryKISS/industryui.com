/**
 * Components - Atoms - Space - Style
 */

// Style
import { css } from 'styled-components'

// UI
import { MEDIA_QUERY } from '../../'

const sizes = {
  xxsSize: '0.25rem',
  xsSize: '0.5rem',
  smSize: '0.75rem',
  mdSize: '1rem',
  lgSize: '1.5rem',
  xlSize: '2rem',
  xxlSize: '2.5rem',
  xxxlSize: '3rem'
}

export const spaceStyler = properties => {
  let stl = ''
  let counter = 0

  properties.forEach(property => {
    if (property.v) {
      counter++
      stl += `${property.k}: ${sizes[property.v + 'Size']};
      ${MEDIA_QUERY.desktop`
        ${property.k}: calc(${sizes[property.v + 'Size']} * 2);`}
      `
    }
  })

  if (counter === 0) {
    return css`
      margin-bottom: ${sizes.mdSize};
      ${MEDIA_QUERY.desktop`
        margin-bottom: calc(${sizes.mdSize} * 2);`}
    `
  }

  return css`
    ${stl}
  `
}
