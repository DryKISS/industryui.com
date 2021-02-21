import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Components - Hooks - Use Timer
 */
// React
import { useEffect, useState } from 'react'; // Moment

import moment from 'moment'; // UI

import { useInterval } from '../useInterval';
export function useTimer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$autoStart = _ref.autoStart,
      autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 1000 : _ref$interval,
      startTime = _ref.startTime,
      endTime = _ref.endTime;

  var getTime = function getTime() {
    var diff = 0;
    var now = endTime ? moment(endTime) : moment();

    if (typeof startTime === 'string') {
      diff = now.diff() - moment(startTime).diff();
    }

    return diff > -1 ? diff : 0;
  };

  var _useState = useState(getTime()),
      _useState2 = _slicedToArray(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1];

  useInterval(function () {
    setTime(function (prev) {
      return prev + interval;
    });
  }, timer);

  var start = function start() {
    if (!timer) setTimer(interval);
  };

  var stop = function stop() {
    setTimer(null);
  };

  useEffect(function () {
    if (autoStart) start();
    return function () {
      stop();
    };
  }, []);

  var getFormattedTime = function getFormattedTime() {
    var temp = moment.duration(time);
    return {
      seconds: temp.seconds().toString().padStart(2, '0'),
      minutes: temp.minutes().toString().padStart(2, '0'),
      hours: parseInt(temp.asHours(), 10),
      exactHours: temp.asHours().toFixed(2)
    };
  };

  return {
    time: getFormattedTime(),
    start: start,
    stop: stop
  };
}
//# sourceMappingURL=useTimer.js.map