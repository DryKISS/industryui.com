/**
 * Icon
 */

// React
import { any, bool, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { CONTEXT } from '../../../../../../../../.storybook/decorators/context'

export const Icon = ({ icon, prefix, path, ...props }) => {
  return <StyledIcon icon={[prefix, icon]} path={path} {...props} />
}

const StyledIcon = styled(Icon)`
  color: ${({ color, context, theme }) => (context ? theme.COLOUR[context] : color)};
`

Icon.propTypes = {
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  fixedWidth: bool,
  icon: string.isRequired,
  prefix: string,
  path: string,
  style: objectOf(oneOfType([number, string])),
  size: oneOf(['xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'])
}

Icon.defaultProps = {
  fixedWidth: true,
  prefix: 'far'
}

Icon.defaultProps = {
  path: '/static/placeholder.svg'
}
