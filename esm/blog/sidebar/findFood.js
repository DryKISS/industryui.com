import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Blog - Find Food
 * Allows a user to link to Deliveroo
 *
 * There are two variants of the Find Food tool:
 * - Postcode entry as seen on: https://deliveroo.co.uk/
 *   - Calls API to get the location to redirect too
 * - Google Maps as seen on: https://deliveroo.ie/
 *
 * <script type="text/javascript"
 * src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
 */
// React
import React, { useState } from 'react';
import { oneOf } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // Yup

import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; // UI

import { Button, FormError, Form, FormField, FormLabel, Icon, InputGroup, InputGroupAddon, Link, validatorPostCode } from '../../';
import { BlogSection } from './components'; // Style

import styled from 'styled-components';
var schema = object().shape({
  postCode: string().required().test('is-valid', "We couldn't recognise that postcode - check and try again.", function (value) {
    return validatorPostCode(value);
  })
});
export var BlogFindFood = function BlogFindFood(_ref) {
  var colour = _ref.colour;

  var _useForm = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      setMsg = _useState2[1];

  var url = 'https://chat.drykiss.com/api/httpsDeliverooRestaurants';
  var domain = 'deliveroo.co.uk';

  var submit = function submit(data) {
    // Fetch restaurant service
    window.fetch("".concat(url, "/").concat(domain, "/").concat(data.postCode)).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }).then(function (res) {
      window.open("https://".concat(domain).concat(res.url), '_self');
    })["catch"](function (error) {
      setMsg("We don\u2019t deliver there yet: ".concat(error.message));
    });
  };

  return /*#__PURE__*/React.createElement(BlogSection, null, /*#__PURE__*/React.createElement(StyledContainer, {
    colour: colour
  }, /*#__PURE__*/React.createElement(StyledForm, {
    handleSubmit: handleSubmit(submit)
  }, /*#__PURE__*/React.createElement(FormLabel, {
    text: "Your favourite restaurants, delivered."
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(FormField, {
    errors: errors,
    register: register,
    name: "postCode",
    placeholder: "Enter your postcode"
  }), /*#__PURE__*/React.createElement(InputGroupAddon, null, /*#__PURE__*/React.createElement(Button, {
    content: "Find food",
    style: {
      background: '#440063',
      borderColor: '#32004a'
    },
    type: "submit"
  })), errors.postCode && /*#__PURE__*/React.createElement(FormError, {
    message: errors.postCode.message
  }), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, msg)))), /*#__PURE__*/React.createElement(Link, {
    to: "https://".concat(domain),
    passHref: true,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(StyledA, null, "Deliveroo ", /*#__PURE__*/React.createElement(Icon, {
    icon: "external-link"
  })))));
};
BlogFindFood.displayName = "BlogFindFood";
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: #fff;\n  line-height: 22px;\n  margin: 0 -10px;\n  padding: 30px 15px 20px;\n"])), function (props) {
  return props.colour === 'beetroot' ? '#e2004f' : '#4e0064';
});
var StyledForm = styled(Form)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .Form-label {\n    font-size: 2rem;\n    line-height: 2rem;\n    margin-bottom: 1.5rem;\n  }\n"])));
var StyledA = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: #fff;\n  display: block;\n  font-size: 0.75rem;\n  text-align: right;\n\n  &:hover,\n  &:focus {\n    color: #bdbaba;\n  }\n"])));
BlogFindFood.propTypes = {
  colour: oneOf(['beetroot', 'aubergine'])
};
BlogFindFood.defaultProps = {
  colour: 'beetroot'
};
//# sourceMappingURL=findFood.js.map