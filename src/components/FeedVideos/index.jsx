import styles from './styles.module.css'

export default function FeedVideos() {
  return (
    <>
      <h2>Videos</h2>
      <div className={styles.content}>
        <section className={styles.item}>
          <article className={styles.itemContent}>
            <div>
              <img />
            </div>
            <div className={styles.itemInfo}>
              <div>
                <h1 className={styles.title}>Alphabet</h1>
                <p className={styles.count}>26 contents</p>
              </div>
              <div>
                <img />
              </div>
            </div>
          </article>
        </section>
        <section className={styles.item}>
          <article className={styles.itemContent}>
            <div>
              <img />
            </div>
            <div className={styles.itemInfo}>
              <div>
                <h1 className={styles.title}>Animals</h1>
                <p className={styles.count}>33 contents</p>
              </div>
              <div>
                <img />
              </div>
            </div>
          </article>
        </section>
        <section className={styles.item}>
          <article className={styles.itemContent}>
            <div>
              <img />
            </div>
            <div className={styles.itemInfo}>
              <div>
                <h1 className={styles.title}>Numbers</h1>
                <p className={styles.count}>10 contents</p>
              </div>
              <div>
                <img />
              </div>
            </div>
    </article>
    </section>
    <section className={styles.item}>
      <article className={styles.itemContent}>
        <div>
          <img />
        </div>
        <div className={styles.itemInfo}>
          <div>
            <h1 className={styles.title}>Colors</h1>
            <p className={styles.count}>13 contents</p>
          </div>
          <div>
            <img />
          </div>
        </div>
      </article>
    </section>
    <section className={styles.item}>
      <article className={styles.itemContent}>
        <div>
          <img />
        </div>
        <div className={styles.itemInfo}>
          <div>
            <h1 className={styles.title}>Personal pronouns</h1>
            <p className={styles.count}>8 contents</p>
          </div>
          <div>
            <img />
          </div>
        </div>
      </article>
    </section>
    </div>
    </>
  )
}
