import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Services - Config - Provider
 */
// React
import React from 'react'; // Context

import { ConfigContext } from '../../';
export var ConfigProvider = function ConfigProvider(props) {
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, _extends({
    value: props.config
  }, props));
};
ConfigProvider.displayName = "ConfigProvider";
//# sourceMappingURL=provider.js.map