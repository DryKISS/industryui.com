import dynamic from 'next/dynamic'
const VoiceRecorder = dynamic(() => import('./voiceRecorder').then(mod => mod.VoiceRecorder), {
  ssr: false
})
export { VoiceRecorder }
