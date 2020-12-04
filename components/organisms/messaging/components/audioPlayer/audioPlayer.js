import dynamic from 'next/dynamic'

const MessageAudioPlayer = dynamic(() => import('./players').then(mod => mod.MessageAudioPlayer), {
  ssr: false
})

const PreviewAudioPlayer = dynamic(() => import('./players').then(mod => mod.PreviewAudioPlayer), {
  ssr: false
})

export { MessageAudioPlayer, PreviewAudioPlayer }
