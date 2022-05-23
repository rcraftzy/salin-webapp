import FeedVideos from "../../components/FeedVideos";
import Navbar from "../../components/navBarApp";
import styles from "../styles.module.css"

export default function Videos (){
  return(
    <div className={styles.content}>
      <Navbar />
      <FeedVideos />
    </div>
  )
}
