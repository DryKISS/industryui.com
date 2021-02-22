/**
 * Atoms - Divider - Props
 */
// React
import { any, number, oneOf } from 'prop-types'; // UI

import { THEME_CONTEXT } from '../../theme/constants/context';
import { THEME_SIZE } from '../../theme/constants/size';
export var propTypes = {
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  size: oneOf(Object.values(THEME_SIZE)),
  thickness: number
};
export var defaultProps = {
  context: 'light',
  size: 'md',
  thickness: 2
};
//# sourceMappingURL=props.js.map