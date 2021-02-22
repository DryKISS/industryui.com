export var toHHMMSS = function toHHMMSS(_ref) {
  var sec = _ref.sec,
      hasSecond = _ref.hasSecond,
      hasMinute = _ref.hasMinute,
      hasHour = _ref.hasHour;
  var secNum = parseInt(sec, 10); // don't forget the second param

  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - hours * 3600) / 60);
  var seconds = secNum - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return (hasHour ? hours + ':' : '') + (hasMinute && hasSecond ? minutes + ':' : hasMinute ? minutes : '') + (hasSecond ? seconds : '');
};
//# sourceMappingURL=hhmmss.js.map