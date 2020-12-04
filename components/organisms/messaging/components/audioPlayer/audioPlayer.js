import dynamic from 'next/dynamic'

const IUIAudioPlayer = dynamic(() => import('./players').then(mod => mod.MessageAudioPlayer), {
  ssr: false
})

export { IUIAudioPlayer }
