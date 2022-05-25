import { useRef } from 'react'
import clsx from 'clsx';
import styles from './styles.module.css'
import useIntersectionAudioPlayer from '../../hooks/useIntersectionAudioPlayer';

export default function AudioPlayer ({ src }){
  const sound = useRef(null)
  const {playing, handlePlay} = useIntersectionAudioPlayer({sound})

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <audio
        className={styles.video} 
        controls={false} 
        onClick={handlePlay}
        ref={sound}
        src={src} 
      />
      <i className={playerClassName} onClick={handlePlay}/>
    </div>
  )
}
