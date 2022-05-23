import styles from './styles.module.css'

export default function Home(){
	return (
		<main className={styles.Main}>
				<header className={styles.Header}>
					<section>
						<h1>A DIGITAL TOOL</h1>					
						<p>Where you can learn English, review vocabulary or watch easy-to-understand grammar videos. 
							A tool where you can listen to the pronunciation of each word and sing along with music videos.</p>
						<div>
							<a><button>Download</button></a> 
							<a href="/app"><button className={styles.btnDos}>Open SALIN in your browser</button></a>
						</div>
					</section>
				</header>
				<section className={styles.TwoColums}>
					<div className={styles.firstImages}>
						<img src="assets/screenVocabulary.jpeg" alt="image" />
						<img src="assets/mustraVocabulary.jpeg" alt="image" />
					</div>
					<div className={styles.info}>
						<h1>Learn vocabulary</h1>
						<p>Learning English is more fun if you do them singing. In the video section you can find music 
							and grammar videos that will help you learn English in a simple and fun way.</p>
					</div>
				</section>
				<section className={styles.TwoColums}>
					<div  className={styles.info}>
						<h1>Look videos</h1>
						<p>A section exclusively dedicated to elementary level vocabulary. 
							It has attractive images and sounds to make it fun to learn and memorize each word.</p>
					</div>
					<div>
						<img className={styles.imgReproductor} src="assets/muestraReproductor.jpeg" alt="image" />
						<img src="assets/screenVideos.jpeg" alt="image" />
					</div>
				</section>
				<section>
					<div className={styles.OneColumn}>
						<h1>A RELIABLE DIGITAL TOOL TO HELP YOU LEARN ELEMENTARY ENGLISH</h1>
						<p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
						<div>
							<img className={styles.imgLeft} src="assets/screenVocabulary.jpeg" alt="image" />
							<img className={styles.imgRight} src="assets/screenVideos.jpeg" alt="image" />
							<img className={styles.imgCenter} src="assets/app.jpeg"/>
						</div>
					</div>
				</section>
				<section className={styles.OneColumn}>
					<h1>Ready to start your journey?</h1>
					<a><button>Download</button></a>
				</section>
		</main>
	)
} 
