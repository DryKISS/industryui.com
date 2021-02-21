/**
 * Details - Props
 */
// React
import { any, bool, func, node, object, oneOf, string } from 'prop-types'; // UI

import { THEME_CONTEXT } from '../../theme/constants/context';
export var DetailsPropTypes = {
  children: node.isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  dataSet: object,
  open: bool,
  summary: string.isRequired,
  SummaryActionsComponent: node,
  style: any,
  Toolbar: func
};
export var DetailsDefaultProps = {
  context: 'primary',
  dataSet: {
    'data-cy': 'details'
  },
  open: false
};
//# sourceMappingURL=props.js.map