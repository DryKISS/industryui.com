import dynamic from 'next/dynamic'

const MessageAudioPlayer = dynamic(() => import('./players').then(mod => mod.MessageAudioPlayer), {
  ssr: false
})

export { MessageAudioPlayer }
