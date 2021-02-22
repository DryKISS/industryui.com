import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Figure - Image
 */
// React
import { any, number, objectOf, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Image } from '../image/image';
export var FigureImage = styled(Image)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  line-height: 1;\n"])));
FigureImage.propTypes = {
  className: any,
  style: objectOf(oneOfType([number, string]))
};
//# sourceMappingURL=image.js.map