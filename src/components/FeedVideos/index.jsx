import {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import {getVideos} from '../../services'
import styles from './styles.module.css'

export default function FeedVideos() {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  const getVideo = async () => {
    getVideos().then(([error, videos]) => {
      if (error) return setError(error)
      setVideos(videos)
    })
  }
  useEffect(() => {
    getVideo();
  })

  if (error) {
    return <span>{error}</span>
  }

  return (
    <>
      <header>
        <h2>Videos</h2>
        <a className={styles.button}>New video</a>
      </header>
      <div className={styles.content}>
        {videos.map(({id, title, src}) => (
          <section key={id} className={styles.item}>
            <article className={styles.itemContent}>
              <div className={styles.imageVideo}>
                <ReactPlayer 
                  url={src}
                  width='100%'
                  height= '160px'
                  controls
                />
              </div>
              <div className={styles.itemInfo}>
                <div>
                  <h1 className={styles.title}>{title}</h1>
                </div>
              </div>
            </article>
          </section>
        ))}
      </div>
    </>
  )
}
