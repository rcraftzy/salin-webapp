import { useEffect, useState } from 'react'

const options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 0.9
}

const observer = new window.IntersectionObserver((entries) => {
  entries
    .forEach(entry => {
      const { target, isIntersecting } = entry
      target._handleIntersect(isIntersecting)
    })
}, options)

export default function useIntersectionAudioPlayer ({ sound }) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!sound.current) return

    observer.observe(sound.current)
    sound.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = sound 

      isIntersecting
        ? videoEl.play()
        : videoEl.pause()

      setPlaying(!videoEl.paused)
    }
  }, [sound.current])

  const handlePlay = () => {
    const { current: videoEl } = sound
    playing
      ? videoEl.play()
      : videoEl.play()

    setPlaying(!playing)
  }

  return {
    handlePlay,
    playing
  }
}
