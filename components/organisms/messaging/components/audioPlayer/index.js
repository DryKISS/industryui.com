import dynamic from 'next/dynamic'

export const IUIMessagingAudioPlayer = dynamic(
  () => import('components').then(module => module.MessagingAudioPlayer),
  {
    ssr: false
  }
)
