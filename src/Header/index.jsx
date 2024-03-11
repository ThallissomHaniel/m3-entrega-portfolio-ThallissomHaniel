import styles from "./header.module.css"
import headerImg from "../assets/portfolio.png"

export const Header = () => {
   
    return (
        <header className={styles.header}>
            <img src={headerImg} alt="Portfólio" />
            <nav className={styles.nav}>
                <button className={styles.button} onClick={() => {
                    addEventListener("click", () => {
                        document.getElementById("aboutDestination").scrollIntoView({ behavior: "smooth" });
                    })
                }}>Sobre</button>
                <button className={styles.button} onClick={() => {
                    addEventListener("click", () => {
                        document.getElementById("techDestination").scrollIntoView({ behavior: "smooth" });
                    })
                }}>Stack</button>
                <button className={styles.button} onClick={() => {
                    addEventListener("click", () => {
                        document.getElementById("projectsDestination").scrollIntoView({ behavior: "smooth" });
                    })
                }}>Projetos</button>
            </nav>
            <button onClick={() => {
                    addEventListener("click", () => {
                        document.getElementById("contactDestination").scrollIntoView({ behavior: "smooth" });
                    })
                }}>Contato</button>
        </header>
    )
}