import { technologies } from "../data/technologies"

export const TechSection = () => {
    return (
        <section className="tech-section">
            <h2>Tecnologias</h2>
            <ul className="tech-list">
                {technologies.map((element) => {
                    return (
                        <li className="tech-li" key={element.id}>
                            <img className="tech-img" src={element.img} alt={element.name} />
                            <p>{element.name}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}