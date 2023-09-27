export const TechList = ({ key, src, alt, name }) => {
    return (
        <li className="tech-li" key={key}>
            <img className="tech-img" src={src} alt={alt} />
            <p>{name}</p>
        </li>
    )
}