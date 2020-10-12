import { Subject } from 'rxjs'
const Subscriber = new Subject()
const ComunicationService = {
  send: msg => {
    Subscriber.next(msg)
  }
}

const LiveChartSubscriber = new Subject()
const LiveChartMessageService = {
  send: msg => {
    LiveChartSubscriber.next(msg)
  }
}

export { ComunicationService, LiveChartMessageService, LiveChartSubscriber, Subscriber }
