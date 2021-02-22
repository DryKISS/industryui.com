import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * App
 *
 * @todo This is doing too much Apollo provider and GTM should be abstracted as options and the
 * providers sorted out
 */
// React
import React from 'react';
import { any, bool, func, object } from 'prop-types'; // Lodash

import merge from 'lodash/merge'; // Apollo

import { ApolloProvider } from '@apollo/client'; // Next

import App from 'next/app'; // Google Tag Manager

import TagManager from 'react-gtm-module'; // UI

import { AuthorizationProvider } from '../services/authorization/provider';
import { ConfigProvider, InternationalisationProvider, NotificationsProvider, OffCanvasProvider, PageProgressBar, Theme, ThemeStyle, UserProvider } from '../'; // Style

import { ThemeProvider } from 'styled-components';
export var MyApp = /*#__PURE__*/function (_App) {
  _inherits(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _super.apply(this, arguments);
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var google = this.props.google;

      if (google) {
        TagManager.initialize({
          gtmId: google.analytics
        });
      }
    }
  }, {
    key: "elements",
    value: function elements() {
      var _this$props = this.props,
          offCanvas = _this$props.offCanvas,
          user = _this$props.user;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ThemeStyle, null), user && /*#__PURE__*/React.createElement(UserProvider, null, /*#__PURE__*/React.createElement(AuthorizationProvider, null, /*#__PURE__*/React.createElement(InternationalisationProvider, null, /*#__PURE__*/React.createElement(NotificationsProvider, null, offCanvas ? /*#__PURE__*/React.createElement(OffCanvasProvider, null, this.layout()) : this.layout())))), !user && this.layout());
    }
  }, {
    key: "data",
    value: function data() {
      var _this$props2 = this.props,
          apolloClient = _this$props2.apolloClient,
          config = _this$props2.config;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConfigProvider, {
        config: config
      }, apolloClient ? /*#__PURE__*/React.createElement(ApolloProvider, {
        client: apolloClient
      }, this.elements()) : this.elements()));
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this$props3 = this.props,
          Component = _this$props3.Component,
          Layout = _this$props3.Layout,
          pageProps = _this$props3.pageProps,
          pageProgressBar = _this$props3.pageProgressBar,
          router = _this$props3.router;
      return /*#__PURE__*/React.createElement(Layout, null, pageProgressBar && /*#__PURE__*/React.createElement(PageProgressBar, {
        router: router
      }), /*#__PURE__*/React.createElement(Component, pageProps));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: merge(Theme, this.props.theme)
      }, this.data());
    }
  }]);

  return MyApp;
}(App);
MyApp.displayName = "MyApp";

_defineProperty(MyApp, "propTypes", {
  apolloClient: object,
  Component: func.isRequired,
  config: object,
  google: object,
  icons: object,
  Layout: any.isRequired,
  offCanvas: bool,
  pageProps: object,
  pageProgressBar: bool,
  theme: object,
  user: bool
});

_defineProperty(MyApp, "defaultProps", {
  offCanvas: false,
  pageProgressBar: false,
  theme: {},
  user: false
});
//# sourceMappingURL=app.js.map