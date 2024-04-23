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
import temperaturas from '../assets/imagesPage/temperatura.png'
import movies from '../assets/imagesPage/movies.png'

function Front() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />

                <Card
                src={movies}
                descricao="
                Descrição: 
                Consumo de API TbMovies por axios/react.
                Projeto feito com react, javascript utilizando axios para consumo de API. Utilização: useState e useEffect, carousel com bootstrap, rotas com react router dom, componentização, consumo de api por axios, e muito mais."
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/MOVIES"
                linkPage="https://moisesdreckmann.github.io/MOVIES/"
                tecnologias= "REACT - VITE - JAVASCRIPT - AXIOS - BOOTSTRAP"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={temperaturas}
                descricao="
                Descrição: 
                Projeto Sensor de Temperatura em react.
                Criação de uma página react, para o projeto sensor de temperatura da faculdade IFSUL, explorando a criação de varias rotas em varias páginas, useStates, Login, ContextAPI, Busca de usuarios, validação de usuarios com YUP e muito mais."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/projetoIfsulTemperatura"
                linkPage="https://moisesdreckmann.github.io/projetoIfsulTemperatura/"
                tecnologias= "REACT - REACT-HOOK-FORM - YUP - CONTEXTAPI - VITE - JAVASCRIPT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={jogo}
                descricao="
                Descrição: 
                Desenvolvimento de jogo. 
                Criação de objetos, 
                Modularização com Vite, 
                Atributos de gaming, como atirar, colisões, 
                Manipulação de audio, 
                Deploy no netlify."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/jogoNave"
                linkPage="https://jogo-nave-moises.netlify.app/index.html"
                tecnologias= "HTML - CSS - VITE - JAVASCRIPT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={formjs}
                descricao="
                Descrição: 
                Formulário desenvolvido em react, com utilização do react-hook-form
                e yup para validação de campos."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/formulariojs"
                linkPage="https://moisesdreckmann.github.io/formulariojs/"
                tecnologias= "REACT - REACT-HOOK-FORM - YUP - VITE - JAVASCRIPT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={calculadora}
                descricao="
                Descrição: 
                Calculadora funcional em react. 
                Realizada com react e vite. Projeto voltado para praticar props, useState para alterar o estado dos componentes, componentização."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/calculadoraReact"
                linkPage="https://moisesdreckmann.github.io/calculadoraReact/"
                tecnologias= "REACT - VITE - JAVASCRIPT - STYLED COMPONENTS"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={jogosIfood}
                descricao="
                Descrição: 
                4 mini jogos feitos com javascript. Jogo da memoria, pegar circulo, piano, e pedra papel tesoura. Orientação a prototipo, Manipulação de listas, Manipulação de DOM, Utilização do Vite para organização do projeto."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/jogosDio"
                linkPage="https://moisesdreckmann.github.io/jogosDio/"
                tecnologias= "HTML - CSS - VITE - JAVASCRIPT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={chocolateria}
                descricao="
                Descrição: 
                Site voltado a venda de chocolates. Utilizado: Efeito parallax, Flexbox, Media queries, responsividade, Menu fixed, Menu interativo para dispositivos moveis, SEO, Acessibilidade, Arquitetura BEM."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-parallax-chocolateria"
                linkPage="https://moisesdreckmann.github.io/project-parallax-chocolateria/"
                tecnologias= "HTML - CSS"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={spacezone}
                descricao=" 
                Descrição: 
                Utilizado: Flexbox, Animation, Efeitos em imagens através de pseudo-elements, Select personalizado Dark theme, Responsividade, Boa performance, Acessibilidade, SEO, Funções pequenas de JS, e Arquitetura BEM. "

                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-spacezone"
                linkPage="https://moisesdreckmann.github.io/project-spacezone/"
                tecnologias= "HTML - CSS - PRE PROCESSADORES CSS (LESS)"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={apple}
                descricao="
                Descrição: 
                Animação de cores com logo Apple

                Animation. Otimização de imagem para boa performance. SEO. Filters Effect. 
                Box-Shadow personalizado."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-apple"
                linkPage="https://moisesdreckmann.github.io/project-apple/"
                tecnologias= "HTML - CSS"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>

                <Card
                src={goblin}
                descricao="
                Descrição: 
                Animações úteis: Login de formulario, loading, eskeleton para carregamento de imagens navBar interativo, e um goblin em constante movimento utilizando sprite e JS (setInterval) para controle."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/animation01"
                linkPage="https://moisesdreckmann.github.io/animation01/"
                tecnologias= "CSS - JAVASCRIPT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card>
            </main>
            <Footer/>
        </>
    )
}

export default Front