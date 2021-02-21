import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Authentication - Providers - User
 * Provides context, state and hooks into managing a user
 *
 * @see https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
 */
// React
import React, { useContext, useEffect, useState } from 'react'; // Bcrypt

import bcrypt from 'bcryptjs'; // Next

import Router from 'next/router'; // Axios

import axios from 'axios'; // UI

import { ConfigContext, decodeToken, UserContext, validateToken } from '../../';
export var UserProvider = function UserProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      accessToken = _useState2[0],
      setAccessToken = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useContext = useContext(ConfigContext),
      apiConfig = _useContext.apiConfig,
      jwtConfig = _useContext.jwtConfig;

  useEffect(function () {
    var bearerToken = window.localStorage.getItem('bearerToken');

    if (bearerToken) {
      try {
        var tokenData = validateToken(bearerToken, jwtConfig);

        if (tokenData.user) {
          setUser(tokenData.user);
        }
      } catch (e) {
        // Invalid token
        window.localStorage.removeItem('bearerToken');
        setAccessToken(null);
        setUser(null);
      }

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  var signIn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(provider, username, password, callback) {
      var user, token, _yield$axios$post, data, tokenData, error, isAuthed;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.post("".concat(apiConfig.authURL, "/login"), {
                email: username,
                password: password
              }, {
                headers: _objectSpread({
                  'Content-Type': 'application/json'
                }, apiConfig.headers)
              });

            case 3:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              token = data.token;
              tokenData = decodeToken(token);
              user = tokenData.user;
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              error = _context.t0.response.data.error;
              callback(new Error(error));

            case 14:
              isAuthed = user && token;

              if (isAuthed) {
                setUser(user);
                window.localStorage.setItem('bearerToken', token);
                setAccessToken(token);
                Router.push('/dashboard');
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function signIn(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var registerContext = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(nameFirst, nameLast, email, password, marketing, birthday, callback) {
      var user, token, _yield$axios$post2, data, tokenData, error, isAuthed;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.post("".concat(apiConfig.authURL, "/register"), {
                nameFirst: nameFirst,
                nameLast: nameLast,
                email: email,
                password: password,
                marketing: marketing,
                birthday: birthday
              }, {
                headers: _objectSpread({
                  'Content-Type': 'application/json'
                }, apiConfig.headers)
              });

            case 3:
              _yield$axios$post2 = _context2.sent;
              data = _yield$axios$post2.data;
              token = data.token;
              tokenData = decodeToken(token);
              user = tokenData.user;
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              error = _context2.t0.response.data.error;
              callback(new Error(error));

            case 14:
              isAuthed = user && token;

              if (isAuthed) {
                setUser(user);
                window.localStorage.setItem('bearerToken', token);
                setAccessToken(token);
                Router.push('/dashboard');
              }

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function registerContext(_x5, _x6, _x7, _x8, _x9, _x10, _x11) {
      return _ref3.apply(this, arguments);
    };
  }();

  var signOut = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              window.localStorage.removeItem('bearerToken');
              window.localStorage.removeItem('active-notifications');
              setAccessToken(null);
              setUser(null);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function signOut() {
      return _ref4.apply(this, arguments);
    };
  }();

  var hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }; // TODO - remove after converting all pages to new user roles


  var authorise = function authorise(condition) {
    if (!condition(user)) {
      Router.push('/account/sign-in');
      return false;
    }

    return true;
  };

  return !isLoading && /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: {
      accessToken: accessToken,
      authorise: authorise,
      hashPassword: hashPassword,
      signIn: signIn,
      registerContext: registerContext,
      signOut: signOut,
      user: user
    }
  }, children);
};
//# sourceMappingURL=provider.js.map