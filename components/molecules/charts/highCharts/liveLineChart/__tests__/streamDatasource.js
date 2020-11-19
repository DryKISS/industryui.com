import { LiveChartMessageService, MessageNames } from 'components/services'

let interval

export const LiveHighChartTestStreamDataSource = {
  start: () => {
    interval = setInterval(function () {
      const x = new Date().getTime() // current time
      const y = Math.round(Math.random() * 100)
      LiveChartMessageService.send({
        name: MessageNames.UPDATE_CHART_DATA,
        // id is specified so if we have multiple charts, we can tell which one we want to update
        id: 'testChart',
        payload: { x, y }
      })
    }, 1000)
  },
  stop: () => {
    window.clearInterval(interval)
  }
}
