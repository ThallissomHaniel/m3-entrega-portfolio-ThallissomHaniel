import {username} from '../data/user'
import bannerImg from "../assets/banner-img.png"

export const BannerSection = () => {
    return (
        <section>
            <div className="wrap">
                <p className="name">{username}</p>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button className="showMore">Saiba mais</button>
            </div>
            <img className="BannerImg" src={bannerImg} alt="BannerImage" />
        </section>
    )
}