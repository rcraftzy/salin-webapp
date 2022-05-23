import FeedVocabulary from "../../components/FeedVocabulary";
import Navbar from "../../components/navBarApp";
import styles from "../styles.module.css"

export default function HomeApp (){
  return(
    <div className={styles.content}>
      <Navbar />
      <FeedVocabulary />
    </div>
  )
}
