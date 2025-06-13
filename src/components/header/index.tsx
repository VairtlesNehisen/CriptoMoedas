import styles from './header.module.css';
import logimg from '../../assets/logo-removebg.png';
import { Link } from "react-router-dom";


export function Header() {
    return (
        <header className={styles.container}>
            <Link to="/" >
                <img src={logimg} alt="logo" className={styles.logo} />

            </Link>
        </header>
    );
}