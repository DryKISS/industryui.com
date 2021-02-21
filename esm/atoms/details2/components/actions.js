import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Atoms - Details2 - Components - Header
 */
// React
import React from 'react';
import { bool, func, node, number, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var Details2Actions = function Details2Actions(_ref) {
  var animationtime = _ref.animationtime,
      children = _ref.children,
      content = _ref.content,
      handleOpenClose = _ref.handleOpenClose,
      iconComponent = _ref.iconComponent,
      isOpen = _ref.isOpen,
      title = _ref.title,
      endActionComponent = _ref.endActionComponent,
      startActionComponent = _ref.startActionComponent,
      toolbar = _ref.toolbar;
  // const animationtime = disableAnimation ? 0 : animationDuration
  // const [isOpen, setisOpen] = useState(open)
  // const contentRef = useRef(null)
  // useEffect(() => {
  //   if (unmountContentOnClose) {
  //     isOpen
  //       ? setchildrenMounted(() => true)
  //       : setTimeout(() => {
  //           window &&
  //             window.requestAnimationFrame(() => {
  //               setchildrenMounted(() => false)
  //             })
  //         }, animationtime ?? 300)
  //   }
  //   setTimeout(
  //     () => {
  //       window &&
  //         window.requestAnimationFrame(() => {
  //           contentRef.current && setcontentHeight(() => contentRef.current.offsetHeight)
  //         })
  //     },
  //     !isOpen ? animationtime ?? 300 : 0
  //   )
  //   return () => {}
  // }, [contentRef.current, isOpen])
  // const handleEventRecieve = e => {
  //   setisOpen(e)
  // }
  // useComponentCommunication({
  //   id: uniqueId,
  //   messageName: MessageNames.DetailsComponent.SET_OPEN,
  //   onRecieve: e => handleEventRecieve(e),
  //   subscriber: DetailsSubscriber
  // })
  return /*#__PURE__*/React.createElement(ActionsWrapper, null, /*#__PURE__*/React.createElement(StartActionComponentWrapper, null, startActionComponent, ' ', (toolbar || endActionComponent) && /*#__PURE__*/React.createElement(ActionsDivider, null)), /*#__PURE__*/React.createElement(ToolbarWrapper, null, toolbar, endActionComponent && /*#__PURE__*/React.createElement(ActionsDivider, null)), endActionComponent);
};
Details2Actions.displayName = "Details2Actions";
var ActionsDivider = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 1rem;\n  margin: 0 1rem;\n  width: 2px;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.dark;
});
var ToolbarWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var StartActionComponentWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var ActionsWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
Details2Actions.propTypes = {
  animationtime: number,
  children: node,
  content: node,
  handleOpenClose: func.isRequired,
  iconComponent: node,
  isOpen: bool,
  title: string.isRequired
};
//# sourceMappingURL=actions.js.map