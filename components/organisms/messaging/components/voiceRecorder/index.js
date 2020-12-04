// import dynamic from 'next/dynamic'
// export const IUIVoiceRecorder = dynamic(
//   () => import('./voiceRecorder').then(mod => mod.VoiceRecorder),
//   {
//     ssr: false
//   }
// )

// React
import { useEffect, useState } from 'react'

// Next
import dynamic from 'next/dynamic'

let VRecorder

export const IUIVoiceRecorder = props => {
  const [recorderLoaded, setRecorderLoaded] = useState(false)

  useEffect(() => {
    VRecorder = dynamic({
      modules: () => ({
        recorder: import('./voiceRecorder').then(mod => mod.VoiceRecorder)
      }),
      render: (props, { recorder: Recorder }) => <Recorder {...props} />,
      ssr: false
    })

    setRecorderLoaded(true)
  }, [])

  const showRecorder = props => {
    if (!recorderLoaded) return <div>Loading ...</div>

    return <VRecorder {...props} />
  }

  return <div>{showRecorder(props)}</div>
}
