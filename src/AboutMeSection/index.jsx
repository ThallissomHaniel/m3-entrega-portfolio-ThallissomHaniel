import styles from "./AboutMeSection.module.css"

export const AboutMeSection = () => {
    return (
        <section id="aboutDestination" className={styles.aboutSection}>
            <h2>Sobre mim</h2>
            <p className="paragraph">Desenvolvedor Front-end e cursando Back-end por KenzieAcademy. tenho o objetivo de me inserir no mercado de desenvolvimento web, adiquirir experiência e me consolidar no mercado.
                Tenho como foco no Front-end o desenvolvimento em Javascript, Typescript, e ReactJS; entre outras bibliotecas auxiliares.
                Me considero uma pessoa persistente, criativa e curioso, tento sempre buscar a lógica de como as coisas acontecem e o porque.</p>
        </section>
    )
}