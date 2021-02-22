import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

/**
 * Molecules - OffCanvas - Container
 */
// React
import { bool, string } from 'prop-types'; // UI

import { MEDIA_QUERY } from '../../../'; // Style

import styled, { css } from 'styled-components';
export var OffCanvasDiv = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-left: ", ";\n  box-shadow: ", ";\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  transition: transform ", "ms ease-in-out;\n  z-index: 9999;\n\n  /* Top Placement */\n  ", "\n\n  /* Right Placement */\n  ", "\n\n  /* Bottom Placement */\n  ", "\n\n  /* Left Placement */\n  ", "\n"])), function (_ref) {
  var show = _ref.show;
  return show ? 'none' : '1px solid #cecece';
}, function (_ref2) {
  var show = _ref2.show;
  return show ? '-5px 0px 38px rgba(0, 0, 0, 0.15)' : 'none';
}, function (_ref3) {
  var duration = _ref3.duration;
  return duration;
}, function (_ref4) {
  var placement = _ref4.placement;
  return placement === 'top' && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      height: ", ";\n      left: 0;\n      right: 0;\n      top: 0;\n      width: 100vw;\n    "])), function (_ref5) {
    var height = _ref5.height;
    return height || '50%';
  });
}, function (_ref6) {
  var placement = _ref6.placement;
  return placement === 'right' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      height: 100vh;\n      right: 0;\n      top: 0;\n      width: 90%;\n      ", "\n    "])), MEDIA_QUERY.desktop(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        width: ", ";\n      "])), function (_ref7) {
    var width = _ref7.width;
    return width;
  }));
}, function (_ref8) {
  var placement = _ref8.placement;
  return placement === 'bottom' && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      bottom: 0;\n      height: ", ";\n      left: 0;\n      right: 0;\n      width: 100vw;\n    "])), function (_ref9) {
    var height = _ref9.height;
    return height || '50%';
  });
}, function (_ref10) {
  var placement = _ref10.placement;
  return placement === 'left' && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      height: 100vh;\n      left: 0;\n      top: 0;\n      width: 90%;\n      ", "\n    "])), MEDIA_QUERY.desktop(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        width: ", ";\n      "])), function (_ref11) {
    var width = _ref11.width;
    return width;
  }));
});
OffCanvasDiv.propTypes = {
  height: string,
  show: bool,
  width: string
};
//# sourceMappingURL=container.js.map