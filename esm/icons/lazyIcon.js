import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Components - Icons - Lazy Icon
 */
// React
import React, { lazy, Suspense } from 'react';
import { oneOf } from 'prop-types'; // UI

import { propTypes } from './props';
export var lazyIcons = {
  get airConditioner() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/airConditionerIcon').then(function (_) {
        return {
          "default": _.AirConditionerIcon
        };
      });
    });
  },

  get arrowDown() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/arrowDownIcon').then(function (_) {
        return {
          "default": _.ArrowDownIcon
        };
      });
    });
  },

  get bell() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/bellIcon').then(function (_) {
        return {
          "default": _.BellIcon
        };
      });
    });
  },

  get bicycle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/bicycleIcon').then(function (_) {
        return {
          "default": _.BicycleIcon
        };
      });
    });
  },

  get boiler() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/boilerIcon').then(function (_) {
        return {
          "default": _.BoilerIcon
        };
      });
    });
  },

  get checkCircle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/checkCircleIcon').then(function (_) {
        return {
          "default": _.CheckCircleIcon
        };
      });
    });
  },

  get checked() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/checkedIcon').then(function (_) {
        return {
          "default": _.CheckedIcon
        };
      });
    });
  },

  get chevron() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronIcon').then(function (_) {
        return {
          "default": _.ChevronIcon
        };
      });
    });
  },

  get chevronCircleDown() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronCircleDownIcon').then(function (_) {
        return {
          "default": _.ChevronCircleDownIcon
        };
      });
    });
  },

  get chevronCircleLeft() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronCircleLeftIcon').then(function (_) {
        return {
          "default": _.ChevronCircleLeftIcon
        };
      });
    });
  },

  get chevronCircleRight() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronCircleRightIcon').then(function (_) {
        return {
          "default": _.ChevronCircleRightIcon
        };
      });
    });
  },

  get chevronCircleUp() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronCircleUpIcon').then(function (_) {
        return {
          "default": _.ChevronCircleUpIcon
        };
      });
    });
  },

  get chevronDown() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronDownIcon').then(function (_) {
        return {
          "default": _.ChevronDownIcon
        };
      });
    });
  },

  get chevronLeft() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronLeftIcon').then(function (_) {
        return {
          "default": _.ChevronLeftIcon
        };
      });
    });
  },

  get chevronRight() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronRightIcon').then(function (_) {
        return {
          "default": _.ChevronRightIcon
        };
      });
    });
  },

  get chevronUp() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/chevronUpIcon').then(function (_) {
        return {
          "default": _.ChevronUpIcon
        };
      });
    });
  },

  get circle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/circleIcon').then(function (_) {
        return {
          "default": _.CircleIcon
        };
      });
    });
  },

  get close() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/closeIcon').then(function (_) {
        return {
          "default": _.CloseIcon
        };
      });
    });
  },

  get coffeeMachine() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/coffeeMachineIcon').then(function (_) {
        return {
          "default": _.CoffeeMachineIcon
        };
      });
    });
  },

  get cross() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/crossIcon').then(function (_) {
        return {
          "default": _.CrossIcon
        };
      });
    });
  },

  get delete() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/deleteIcon').then(function (_) {
        return {
          "default": _.DeleteIcon
        };
      });
    });
  },

  get desk() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/deskIcon').then(function (_) {
        return {
          "default": _.DeskIcon
        };
      });
    });
  },

  get desktop() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/desktopIcon').then(function (_) {
        return {
          "default": _.DesktopIcon
        };
      });
    });
  },

  get dishwasher() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/dishwasherIcon').then(function (_) {
        return {
          "default": _.DishwasherIcon
        };
      });
    });
  },

  get download() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/downloadIcon').then(function (_) {
        return {
          "default": _.DownloadIcon
        };
      });
    });
  },

  get edit() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/editIcon').then(function (_) {
        return {
          "default": _.EditIcon
        };
      });
    });
  },

  get exclamationCircle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/exclamationCircleIcon').then(function (_) {
        return {
          "default": _.ExclamationCircleIcon
        };
      });
    });
  },

  get filePdf() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/filePdfIcon').then(function (_) {
        return {
          "default": _.FilePdfIcon
        };
      });
    });
  },

  get flag() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/flagIcon').then(function (_) {
        return {
          "default": _.FlagIcon
        };
      });
    });
  },

  get freezer() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/freezerIcon').then(function (_) {
        return {
          "default": _.FreezerIcon
        };
      });
    });
  },

  get fridge() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/fridgeIcon').then(function (_) {
        return {
          "default": _.FridgeIcon
        };
      });
    });
  },

  get fullScreen() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/fullScreenIcon').then(function (_) {
        return {
          "default": _.FullScreenIcon
        };
      });
    });
  },

  get fuseBox() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/fuseBoxIcon').then(function (_) {
        return {
          "default": _.FuseBoxIcon
        };
      });
    });
  },

  get group() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/groupIcon').then(function (_) {
        return {
          "default": _.GroupIcon
        };
      });
    });
  },

  get image() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/imageIcon').then(function (_) {
        return {
          "default": _.ImageIcon
        };
      });
    });
  },

  get list() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/listIcon').then(function (_) {
        return {
          "default": _.ListIcon
        };
      });
    });
  },

  get mapMarker() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/mapMarkerIcon').then(function (_) {
        return {
          "default": _.MapMarkerIcon
        };
      });
    });
  },

  get meetingRoom() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/meetingRoomIcon').then(function (_) {
        return {
          "default": _.MeetingRoomIcon
        };
      });
    });
  },

  get menuBars() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/menuBarsIcon').then(function (_) {
        return {
          "default": _.MenuBarsIcon
        };
      });
    });
  },

  get mic() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/micIcon').then(function (_) {
        return {
          "default": _.MicIcon
        };
      });
    });
  },

  get microwave() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/microwaveIcon').then(function (_) {
        return {
          "default": _.MicrowaveIcon
        };
      });
    });
  },

  get octagon() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/octagonIcon').then(function (_) {
        return {
          "default": _.OctagonIcon
        };
      });
    });
  },

  get oven() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/ovenIcon').then(function (_) {
        return {
          "default": _.OvenIcon
        };
      });
    });
  },

  get paperPlane() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/paperPlaneIcon').then(function (_) {
        return {
          "default": _.PaperPlaneIcon
        };
      });
    });
  },

  get pauseCircle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/pauseCircleIcon').then(function (_) {
        return {
          "default": _.PauseCircleIcon
        };
      });
    });
  },

  get playCircle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/playCircleIcon').then(function (_) {
        return {
          "default": _.PlayCircleIcon
        };
      });
    });
  },

  get plus() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/plusIcon').then(function (_) {
        return {
          "default": _.PlusIcon
        };
      });
    });
  },

  get projector() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/projectorIcon').then(function (_) {
        return {
          "default": _.ProjectorIcon
        };
      });
    });
  },

  get pump() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/pumpIcon').then(function (_) {
        return {
          "default": _.PumpIcon
        };
      });
    });
  },

  get save() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/saveIcon').then(function (_) {
        return {
          "default": _.SaveIcon
        };
      });
    });
  },

  get search() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/searchIcon').then(function (_) {
        return {
          "default": _.SearchIcon
        };
      });
    });
  },

  get sensor() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/sensorIcon').then(function (_) {
        return {
          "default": _.SensorIcon
        };
      });
    });
  },

  get siren() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/sirenIcon').then(function (_) {
        return {
          "default": _.SirenIcon
        };
      });
    });
  },

  get smokeDetector() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/smokeDetectorIcon').then(function (_) {
        return {
          "default": _.SmokeDetectorIcon
        };
      });
    });
  },

  get sprinkle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/sprinkleIcon').then(function (_) {
        return {
          "default": _.SprinkleIcon
        };
      });
    });
  },

  get squareClose() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/squareCloseIcon').then(function (_) {
        return {
          "default": _.SquareCloseIcon
        };
      });
    });
  },

  get square() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/squareIcon').then(function (_) {
        return {
          "default": _.SquareIcon
        };
      });
    });
  },

  get star() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/starIcon').then(function (_) {
        return {
          "default": _.StarIcon
        };
      });
    });
  },

  get television() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/televisionIcon').then(function (_) {
        return {
          "default": _.TelevisionIcon
        };
      });
    });
  },

  get thermometer() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/thermometerIcon').then(function (_) {
        return {
          "default": _.ThermometerIcon
        };
      });
    });
  },

  get triangle() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/triangleIcon').then(function (_) {
        return {
          "default": _.TriangleIcon
        };
      });
    });
  },

  get upload() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/uploadIcon').then(function (_) {
        return {
          "default": _.UploadIcon
        };
      });
    });
  },

  get verticalThreeDots() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/verticalThreeDotsIcon').then(function (_) {
        return {
          "default": _.VerticalThreeDotsIcon
        };
      });
    });
  },

  get washingMachine() {
    return /*#__PURE__*/lazy(function () {
      return import('./components/washingMachineIcon').then(function (_) {
        return {
          "default": _.WashingMachineIcon
        };
      });
    });
  }

};
export var LazyIcon = function LazyIcon(_ref) {
  var iconName = _ref.iconName,
      props = _objectWithoutProperties(_ref, ["iconName"]);

  var Icon = lazyIcons[iconName] || lazyIcons.circle;
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(React.Fragment, null)
  }, /*#__PURE__*/React.createElement(Icon, props));
};
LazyIcon.displayName = "LazyIcon";
LazyIcon.propTypes = _objectSpread({
  iconName: oneOf(Object.keys(lazyIcons))
}, propTypes);
//# sourceMappingURL=lazyIcon.js.map