import {Link} from 'wouter';
import styles from './styles.module.css'

const NavBarApp = () => (
	<header className={styles.container}>
		<nav className={styles.sideBar}>
			<ul className={styles.navBar}>
				<li className={styles.brand}>
					<a href="#">
						<img src="assets/salin200.png" alt="logo"/>
					</a>
				</li>
				<Link href="/app">
				<li className={styles.item}>
					<a className={styles.icon}>
						<img src="assets/app/nav/vocaImg2.png"/>
					</a>
					<a className={styles.link}>Vocabulary</a>
				</li>
				</Link>
				<Link href="/videos">
				<li className={styles.item}>
					<a className={styles.icon}>
						<img src="assets/app/nav/videImg2.png"/>
					</a>
					<a className={styles.link}>Videos</a>
				</li>
				</Link>
			</ul>
		</nav>
	</header>
);

export default NavBarApp;

