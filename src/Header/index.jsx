import styles from "./header.module.css"
import headerImg from "../assets/portfolio.png"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={headerImg} alt="Portfólio" />
            <nav className={styles.nav}>
                <button className={styles.button}>Sobre</button>
                <button className={styles.button}>Stack</button>
                <button className={styles.button}>Projetos</button>
            </nav>
            <button>Contato</button>
        </header>
    )
}