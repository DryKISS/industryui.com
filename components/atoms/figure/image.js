/**
 * Figure - Image
 */

// React
import { any, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Image } from '../image/image'

export const FigureImage = styled(Image)`
  display: block;
  line-height: 1;
`

FigureImage.propTypes = {
  className: any,
  style: objectOf(oneOfType([number, string])),
}
