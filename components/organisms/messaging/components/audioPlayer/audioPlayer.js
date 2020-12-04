import dynamic from 'next/dynamic'
const AudioPlayer = dynamic(() => import('react-h5-audio-player'), {
  ssr: false
})
const RHAP_UI = dynamic(() => import('react-h5-audio-player').then(mod => mod.RHAP_UI), {
  ssr: false
})
export { AudioPlayer, RHAP_UI }
