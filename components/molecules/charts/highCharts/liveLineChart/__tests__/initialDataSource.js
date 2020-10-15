export const LiveChartInitialTestDataSource = (function () {
  // generate an array of random data
  var data = []
  var time = new Date().getTime()
  var i

  for (i = -999; i <= 0; i += 1) {
    data.push([time + i * 1000, Math.round(Math.random() * 100)])
  }
  return data
})()
