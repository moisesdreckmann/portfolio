import { useState } from "react"
import { useEffect } from "react"
import CardTecnologia from "../components/CardTecnologia.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import tecno1 from '../assets/imagesTecno/1.png'
import tecno2 from '../assets/imagesTecno/2.png'
import tecno3 from '../assets/imagesTecno/3.png'
import tecno4 from '../assets/imagesTecno/4.png'
import tecno5 from '../assets/imagesTecno/5.png'
import tecno6 from '../assets/imagesTecno/6.png'
import tecno7 from '../assets/imagesTecno/7.png'
import tecno8 from '../assets/imagesTecno/8.png'
import tecno9 from '../assets/imagesTecno/9.png'
import tecno10 from '../assets/imagesTecno/10.png'
import tecno11 from '../assets/imagesTecno/11.png'
import tecno12 from '../assets/imagesTecno/12.png'
import tecno13 from '../assets/imagesTecno/13.png'
import tecno14 from '../assets/imagesTecno/14.png'
import tecno15 from '../assets/imagesTecno/15.webp'
import tecno16 from '../assets/imagesTecno/16.png'
import tecno17 from '../assets/imagesTecno/17.png'
import tecno18 from '../assets/imagesTecno/18.png'
import tecno19 from '../assets/imagesTecno/19.png'
import tecno20 from '../assets/imagesTecno/20.png'
import tecno21 from '../assets/imagesTecno/21.jpg'
import tecno22 from '../assets/imagesTecno/22.png'
import tecno23 from '../assets/imagesTecno/23.svg'
import tecno24 from '../assets/imagesTecno/24.svg'
import tecno25 from '../assets/imagesTecno/25.png'
import tecno26 from '../assets/imagesTecno/26.png'

function Home() {
    const [dadosUsuario, setDadosUsuario] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/moisesdreckmann')
        .then((res) => res.json())
        .then((json) => setDadosUsuario(json))

        window.scrollTo(0, 0);
    }, [])

    return(
        <>
            <main className="container">
                <Navbar className="nav" />
                <div className="containerPart1">
                    <a href="https://github.com/moisesdreckmann"><img className="imgSelf" src={dadosUsuario.avatar_url} alt="imagem de perfil do github"/></a>
                </div>
                <div className="containerPart2">
                    <p className="text">
                        Olá. Me chamo <strong>Moisés Dreckmann</strong>. 
                    </p>
                    <p className="text2">
                        No front-end, destaco minha extensa experiência com React, JavaScript, Typescript, e dominio do CSS. Fui capaz de aprimorar minhas habilidades na criação de interfaces interativas e responsivas. Trabalhei em projetos desafiadores, aplicando boas práticas de desenvolvimento e mantendo-me atualizado com as últimas tendências no ecossistema. Possuo profunda expertise no backend utilizando PHP, Mysql e Postgresql. Meu primeiro contato com Hello World foi através de C++. Desde então, tenho ampliado meu conhecimento em diversas tecnologias. 
                    </p>
                    <div className="containerPart3">
                        <p className="text"></p>
                        <p className="text2 color2">FRONT-END</p>
                        <div className="containerCardTecnologia">
                            <CardTecnologia className="cardTecno" text="REACT" color={'#170d29'} img={tecno1}/>
                            <CardTecnologia className="cardTecno" text="VITE" color={'#170d29'} img={tecno22}/>
                            <CardTecnologia className="cardTecno" text="JAVASCRIPT" color={'#170d29'} img={tecno2}/>
                            <CardTecnologia className="cardTecno" text="TYPESCRIPT" color={'#170d29'} img={tecno3}/>
                            <CardTecnologia className="cardTecno" text="NPM" color={'#170d29'} img={tecno23}/>
                            <CardTecnologia className="cardTecno" text="BOOTSTRAP" color={'#170d29'} img={tecno4}/>
                            <CardTecnologia className="cardTecno" text="CSS 3" color={'#170d29'} img={tecno5}/>
                            <CardTecnologia className="cardTecno" text="TAILWIND" color={'#170d29'} img={tecno7}/>
                            <CardTecnologia className="cardTecno" text="HTML 5" color={'#170d29'} img={tecno8}/>
                            <CardTecnologia className="cardTecno" text="AXIOS" color={'#170d29'} img={tecno9}/>
                            <CardTecnologia className="cardTecno" text="JWT" color={'#170d29'} img={tecno10}/>
                            <CardTecnologia className="cardTecno" text="NEXT" color={'#170d29'} img={tecno25}/>
                            <CardTecnologia className="cardTecno" text="API REST" color={'#170d29'} img={tecno26}/>
                            <CardTecnologia className="cardTecno2" text="STYLED COMPONENTS" color={'#170d29'} img={tecno6}/>
                        </div>
                        <p className="text2 color2">BACK-END</p>
                        <div className="containerCardTecnologia">
                            <CardTecnologia className="cardTecno" text="NODEJS" color={'#170d29'} img={tecno11}/>
                            <CardTecnologia className="cardTecno" text="PHP" color={'#170d29'} img={tecno12}/>
                            <CardTecnologia className="cardTecno" text="MYSQL" color={'#170d29'} img={tecno13}/>
                            <CardTecnologia className="cardTecno" text="POSTGRESQL" color={'#170d29'} img={tecno14}/>
                            <CardTecnologia className="cardTecno" text="MONGODB" color={'#170d29'} img={tecno15}/>
                            <CardTecnologia className="cardTecno" text="C" color={'#170d29'} img={tecno16}/>
                            <CardTecnologia className="cardTecno" text="JAVA" color={'#170d29'} img={tecno17}/>
                            <CardTecnologia className="cardTecno" text="SPRINGBOOT" color={'#170d29'} img={tecno18}/>
                            <CardTecnologia className="cardTecno" text="COMPOSER" color={'#170d29'} img={tecno24}/>
                        </div>
                        <p className="text2 color2">OUTROS</p>
                        <div className="containerCardTecnologia">
                            <CardTecnologia className="cardTecno" text="GIT" color={'#170d29'} img={tecno19}/>
                            <CardTecnologia className="cardTecno" text="PHOTOSHOP" color={'#170d29'} img={tecno20}/>
                            <CardTecnologia className="cardTecno" text="FILMORA" color={'#170d29'} img={tecno21}/>
                        </div>
                    </div>
                </div>   
            </main>
            <Footer/>
        </>
        
    )
}

export default Home