import { user } from "../data/user"
import whatsappIcon from "../assets/whatsapp-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"
import githubIcon from "../assets/github-icon.png"
export const Footer = () => {
    return (
        <footer id="contactDestination">
            <div>
                <h2>Contato</h2>
                <div>
                    <a href="https://api.whatsapp.com/send/?phone=5524993191864&text&type=phone_number&app_absent=0"><img src={whatsappIcon} alt="whatsapp" /></a>
                    <a href="https://www.linkedin.com/in/thallisson-haniel-48a547116/"><img src={linkedinIcon} alt="linkedin" /></a>
                    <a href="https://github.com/ThallissomHaniel"><img src={githubIcon} alt="github" /></a>
                </div>
            </div>
            <p>Todos os direitos reservados - {user}</p>
        </footer>
    )
}