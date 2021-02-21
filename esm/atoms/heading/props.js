/**
 * Heading - Props
 */
// React
import { any, bool, object, objectOf, oneOf, oneOfType, number, string } from 'prop-types'; // UI

import { THEME_CONTEXT } from '../../theme/constants/context';
export var propTypes = {
  className: any,
  content: oneOfType([string, object]),
  context: oneOf(Object.values(THEME_CONTEXT)),
  noMargin: bool,
  noWrap: bool,
  style: objectOf(oneOfType([number, string])),
  tag: string
};
export var defaultProps = {
  context: THEME_CONTEXT.DARK,
  noWrap: false,
  tag: 'h1'
};
//# sourceMappingURL=props.js.map