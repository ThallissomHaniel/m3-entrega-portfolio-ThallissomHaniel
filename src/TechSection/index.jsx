import { technologies } from "../data/technologies"
import { TechList } from "../TechList"
export const TechSection = () => {
    return (
        <section id="techDestination" className="tech-section">
            <h2>Tecnologias</h2>
            <ul className="tech-list">
                {technologies.map((element) => {
                    return (
                        <TechList key={element.id} src={element.img} alt={element.name} name={element.name}/>
                    )
                })}
            </ul>
        </section>
    )
}