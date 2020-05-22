/**
 * Caption
 */

// React
import { any, number, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Image } from '../../image/image'

// Style
import styled from 'styled-components'

export const FigureImage = ({ className, style, ...props }) => (
  <StyledImage className={className} style={style} {...props} />
)

const StyledImage = styled(Image)`
  display: block;
  line-height: 1;
`

FigureImage.propTypes = {
  className: any,
  style: objectOf(oneOfType([number, string]))
}
