/**
 * Components - Molecules - Video Player - Helper -  Video Subtitle
 */

const videoSubtitle = ({ subtitles, subtitle }) => {
  const track = (subtitles || []).find(({ srcLang = 'en' }) => srcLang === subtitle)

  if (track) {
    return <track {...track} default></track>
  }

  return null
}

export default videoSubtitle
