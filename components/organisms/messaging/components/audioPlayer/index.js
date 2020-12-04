// import dynamic from 'next/dynamic'

// export const IUIMessagingAudioPlayer = dynamic(
//   () => import('./messagingAudioPlayer').then(module => module.MessagingAudioPlayer),
//   {
//     ssr: false
//   }
// )

// React
import { useEffect, useState } from 'react'

// Next
import dynamic from 'next/dynamic'

let IUIPlayer

export const IUIMessagingAudioPlayer = props => {
  const [playerLoaded, setPlayerLoaded] = useState(false)

  useEffect(() => {
    IUIPlayer = dynamic({
      modules: () => ({
        player: import('./messagingAudioPlayer').then(mod => mod.MessagingAudioPlayer)
      }),
      render: (props, { player: Player }) => <Player {...props} />,
      ssr: false
    })

    setPlayerLoaded(true)
  }, [])

  const showPlayer = props => {
    if (!playerLoaded) return <div>Loading ...</div>

    return <IUIPlayer {...props} />
  }

  return <div>{showPlayer(props)}</div>
}
