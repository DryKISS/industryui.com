/**
 * Media Query
 *
 * Usage
 * const Container = styled.div`
 *   color: #333;
 *   ${media.desktop`padding: 0 20px;`}
 *   ${media.tablet`padding: 0 10px;`}
 *   ${media.phone`padding: 0 5px;`}
 * `
 *
 * @todo Bring in the sizes from the Theme
 * @todo find out why the $ sign causes an issue with styelint - maybe need the right module installed
 */
import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

export const MEDIA_QUERY = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
