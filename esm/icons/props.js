/**
 * Components - Icons - Props
 */
// React
import { bool, func, number, oneOfType, string } from 'prop-types';
export var propTypes = {
  colour: string,
  disabled: bool,
  disabledColour: string,
  fixColour: string,
  hoverColour: oneOfType([bool, string]),
  onClick: func,
  size: oneOfType([number, string])
};
//# sourceMappingURL=props.js.map