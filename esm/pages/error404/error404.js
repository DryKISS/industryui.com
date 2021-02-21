/**
 * Error 404
 */
// React
import React from 'react'; // Layout

import { Page } from '../../layouts/page/page';
import { Text } from '../../atoms/text/text';
export var Error404 = function Error404() {
  var meta = {
    description: "\n      DryKISS is a full service internet and mobile digital production house.\n      Our services span consulting, strategy; planning; development; testing\n      and analytics.\n    ",
    path: '/404',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  };
  return /*#__PURE__*/React.createElement(Page, {
    heading: "404 ERROR PAGE \u2013 NOT FOUND",
    meta: meta
  }, /*#__PURE__*/React.createElement(Text, null, "The page you were looking for no longer exists or never did. Please use the links at the top of your screen to get back in the game, or click here to go home and start again."));
};
Error404.displayName = "Error404";
//# sourceMappingURL=error404.js.map