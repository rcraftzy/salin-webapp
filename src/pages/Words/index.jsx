import styles from '../styles.module.css'
import Navbar from "../../components/navBarApp";
import FeedWords from '../../components/FeedWords';

export default function Words(){
  return (
    <div className={styles.content}>
      <Navbar />
      <FeedWords />
    </div>
  )
}
