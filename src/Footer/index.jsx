import { user } from '../data/user'
import whatsappIcon from "../assets/whatsapp-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"
import githubIcon from "../assets/github-icon.png"
export const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contato</h2>
                <div>
                    <img src={whatsappIcon} alt="" />
                    <img src={linkedinIcon} alt="" />
                    <img src={githubIcon} alt="" />
                </div>
            </div>
            <p>Todos os direitos reservados - {user}</p>
        </footer>
    )
}