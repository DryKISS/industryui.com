/**
 * Simple Time
 */
// React
import { bool, number, oneOfType, string } from 'prop-types'; // UI

import { useTimer } from '../../';
export var SimpleTime = function SimpleTime(_ref) {
  var autoStart = _ref.autoStart,
      endTime = _ref.endTime,
      startTime = _ref.startTime;

  var _useTimer = useTimer({
    autoStart: autoStart,
    endTime: endTime,
    startTime: startTime
  }),
      _useTimer$time = _useTimer.time,
      seconds = _useTimer$time.seconds,
      minutes = _useTimer$time.minutes,
      hours = _useTimer$time.hours,
      days = _useTimer$time.days;

  return "".concat(days, ":").concat(hours, ":").concat(minutes, ":").concat(seconds);
};
SimpleTime.propTypes = {
  autoStart: bool,
  startTime: oneOfType([number, string]),
  endTime: oneOfType([number, string])
};
//# sourceMappingURL=simpleTime.js.map