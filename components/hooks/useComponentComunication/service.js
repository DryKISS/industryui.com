import { Subject } from 'rxjs'
const Subscriber = new Subject()
const ComunicationService = {
  send: msg => {
    Subscriber.next(msg)
  }
}
export { ComunicationService, Subscriber }
