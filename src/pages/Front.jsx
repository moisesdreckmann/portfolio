import Card from "../components/Card.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import spacezone from '../assets/imagesPage/spacezone.png'
import chocolateria from '../assets/imagesPage/chocolate.png'
import calculadora from '../assets/imagesPage/calculadora.png'
import formjs from '../assets/imagesPage/formjs.png'
import apple from '../assets/imagesPage/apple.gif'
import goblin from '../assets/imagesPage/goblin.gif'
import jogo from '../assets/imagesPage/jogo.png'
import jogosIfood from '../assets/imagesPage/jogosIfood.png'
import github from '../assets/imagesPage/github.png'
import temperaturas from '../assets/imagesPage/temperatura.png'

function Front() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />

                <Card
                src={temperaturas}
                titulo="PROJETO SENSOR TEMPERATURA REACT"
                descricao="Criação de uma página react, para o projeto sensor de temperatura da faculdade IFSUL, explorando a criação de varias rotas em varias páginas, useStates, Login, ContextAPI, Busca de usuarios, validação de usuarios com YUP e muito mais. Tecnologias: React, YUP, React-Hook-Forms, React-Calendar, ContextAPI."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/projetoIfsulTemperatura"
                linkPage="https://moisesdreckmann.github.io/projetoIfsulTemperatura/"
                >
                </Card>

                <Card
                src={jogo}
                titulo="JOGO DESENVOLVIDO COM VITE E JAVASCRIPT"
                descricao="Criação de objetos, 
                Modularização com Vite, 
                Atributos de gaming, como atirar, colisões, 
                Manipulação de audio, 
                Deploy no netlify. Tecnologias: Vite Javascript"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/jogoNave"
                linkPage="https://jogo-nave-moises.netlify.app/index.html"
                >
                </Card>

                <Card
                src={formjs}
                titulo="FORMULARIO EM REACT"
                descricao="Formulário desenvolvido em react, com utilização do react-hook-form
                e yup para validação de campos. Tecnologias: React React-Hook-Forms Javascript Vite YUP"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/formulariojs"
                linkPage="https://moisesdreckmann.github.io/formulariojs/"
                >
                </Card>

                <Card
                src={calculadora}
                titulo="CALCULADORA FUNCIONAL EM REACT"
                descricao="Realizada com react e vite. Projeto voltado para praticar props, useState para alterar o estado dos componentes, componentização. Tecnologias: React Javascript"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/calculadoraReact"
                linkPage="https://moisesdreckmann.github.io/calculadoraReact/"
                >
                </Card>

                <Card
                src={jogosIfood}
                titulo="MINI JOGOS DESENVOLVIDOS COM JAVASCRIPT"
                descricao="4 jogos. Jogo da memoria, pegar circulo, piano, e pedra papel tesoura. Orientação a prototipo, Manipulação de listas, Manipulação de DOM, Utilização do Vite para organização do projeto. Tecnologias: Vite Javascript"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/jogosDio"
                linkPage="https://moisesdreckmann.github.io/jogosDio/"
                >
                </Card>

                <Card
                src={github}
                titulo="CONSUMINDO GITHUB POR AXIOS"
                descricao="Projeto feito com react, javascript utilizando axios para consumo de API. Tecnologias: React Javascript."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/apiGit"
                linkPage="https://moisesdreckmann.github.io/apiGit/"
                >
                </Card>

                <Card
                src={chocolateria}
                titulo="PROJETO CHOCOLATERIA"
                descricao="Site voltado a venda de chocolates. Utilizado: Efeito parallax, Flexbox, Media queries, responsividade, Menu fixed, Menu interativo para dispositivos moveis, SEO, Acessibilidade, Arquitetura BEM. Tecnologias: HTML CSS."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-parallax-chocolateria"
                linkPage="https://moisesdreckmann.github.io/project-parallax-chocolateria/"
                >
                </Card>

                <Card
                src={spacezone}
                titulo="PROJETO SPACEZONE"
                descricao=" Utilizado: Flexbox, Animation, Efeitos em imagens através de pseudo-elements, Select personalizado Dark theme, Responsividade, Boa performance, Acessibilidade, SEO, Funções pequenas de JS, Arquitetura BEM e Carousel. Tecnologias: HTML CSS Bootstrap."

                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-spacezone"
                linkPage="https://moisesdreckmann.github.io/project-spacezone/"
                >
                </Card>

                <Card
                src={apple}
                titulo="PROJETO APPLE"
                descricao="Animação de cores com logo Apple

                Animation. Otimização de imagem para boa performance. SEO. Filters Effect. 
                Box-Shadow personalizado. Tecnologias: HTML CSS."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-apple"
                linkPage="https://moisesdreckmann.github.io/project-apple/"
                >
                </Card>

                <Card
                src={goblin}
                titulo="ANIMATION CSS/JS"
                descricao="Animações úteis: Login de formulario, loading, eskeleton para carregamento de imagens navBar interativo, e um goblin em constante movimento utilizando sprite e JS (setInterval) para controle. Tecnologias: CSS Javascript."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/animation01"
                linkPage="https://moisesdreckmann.github.io/animation01/"
                >
                </Card>
            </main>
            <Footer/>
        </>
    )
}

export default Front