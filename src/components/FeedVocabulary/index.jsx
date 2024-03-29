import styles from './styles.module.css'
import { getVocabulary } from '../../services'
import {useEffect, useState} from 'react'
import AudioPlayer from '../AudioPlayer';
import { Route } from 'wouter';
  
export default function FeedVocabulary() {
  const [vocabulary, setVocabulary] = useState([])
  const [error, setError] = useState(null)

 const getVocabularies = async () => {
    const data = await getVocabulary().then(([error, vocabulary]) => {
      if (error) return setError(error)
      return vocabulary
    });
    setVocabulary(data)
  }

  useEffect (() => {
    getVocabularies();
    console.log(vocabulary)
  },[])

  if (error) {
    return (
      <span>{error}</span>
    )
  }

  return (
    <>
      <header>
        <h2>Vocabulary</h2>
        <a className={styles.button}>New section</a>
      </header>
      <div className={styles.content}>
          {vocabulary.map(({id, title, icon, sound}) => (
            <section id={id} key={id} className={styles.item}>
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
                    <AudioPlayer 
                      {...vocabulary}
                      src={sound}
                    />
                  </div>
                </div>
              </article>
            </section>
          )
          )}
      </div>
    </>
  )
}

