import { useState, useEffect } from "react"
import {getWords} from "../../services"
import AudioPlayer from '../AudioPlayer';

export default function FeedWords({id}){
  const [words, setWords] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getWords().then(([error, words]) => {      
      if (error) return setError(error)
      setWords(words)
    })
    console.log(id)
  }, [])

  if (error) {
    return (
      <span>{error}</span>
    )
  }

  return (
    words.map(word => {
      const { vocabulary: { id, title, icon } } = word
    
      return (
        <div key={word.id} >
          <img
            src={word.icon}
          />
          <a>{word.name}</a>
          <AudioPlayer 
            {...word}
            src={word.sound}
          />
        </div>
      )
    })
  )
}
