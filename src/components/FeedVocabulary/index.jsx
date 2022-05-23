import styles from './styles.module.css'
import { getVocabulary } from '../../services'
import {useEffect, useState} from 'react'
  
export default function FeedVocabulary() {
  //const src = 'assets/audio/alphabet1.wav';
  //const playB = () => new Audio(src).play();

  const [vocabulary, setVocabulary] = useState([])
  const [error, setError] = useState(null)

 const getVocabularies = async () => {
    getVocabulary().then(([error, vocabulary]) => {
      if (error) return setError(error)
      setVocabulary(vocabulary)
    }) 
  }

  useEffect (() => {
    
    getVocabularies();
  },[])

  if (error) {
    return (
      <span>{error}</span>
    )
  }

  return (
    <>
      <h2>Vocabulary</h2>
      <div className={styles.content}>
        {vocabulary.map(({id, title, icon, sound}) => (
          <section key={id} className={styles.item}>
            <article className={styles.itemContent}>
              <div className={styles.ItemImage}>
                <img className={styles.image} src={icon}/>
              </div>
              <div className={styles.itemInfo}>
                <div>
                  <h1 className={styles.title}>{title}</h1>
                  <p className={styles.count}>26 contents</p>
                </div>
                <div>
                  <a className={styles.icon}>
                    <img  src="assets/sound.png"/>
                  </a>
                </div>
              </div>
            </article>
          </section>
        ))}
      </div>
    </>
  )
}
  
