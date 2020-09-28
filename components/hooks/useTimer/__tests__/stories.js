/**
 * useTimer
 */

// UI
import { useTimer } from '../'
import { Button, ButtonToolbar } from '../../..'
import Readme from '../README.md'

export default {
  title: 'Hooks/Timer',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const {
    time: { seconds, minutes, hours, days },
    start,
    stop
  } = useTimer(props)

  return (
    <div>
      {`${days}:${hours}:${minutes}:${seconds}`}
      {/* {time} */}
      <ButtonToolbar>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
      </ButtonToolbar>
    </div>
  )
}

export const main = () => <BaseComponent />

export const withInitialTime = () => <BaseComponent startTime='2020-03-07T12:35:00' />

export const manualStart = () => <BaseComponent autoStart={false} />

export const showDuration = () => (
  <BaseComponent autoStart={false} startTime='2020-03-07T12:35:00' endTime='2020-03-07T13:40:00' />
)
