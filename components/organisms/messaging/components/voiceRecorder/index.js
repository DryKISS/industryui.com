import dynamic from 'next/dynamic'
export const IUIVoiceRecorder = dynamic(() => import('components').then(mod => mod.VoiceRecorder), {
  ssr: false
})
