import { projects } from "../data/projects"
import githubIcon from "../assets/github-icon.png"

export const ProjectSection = () => {
    return (
        <section className="projects-section">
            <h2>Projetos</h2>
            <ul className="projects-list">
                {projects.map((element) => {
                    return (
                        <li key={element.id}>
                            <h3 className="title3">{element.name}</h3>
                            <p className="paragraph">{element.description}</p>
                            <a href="">Saiba mais</a>
                            <img src={githubIcon} alt="" />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}