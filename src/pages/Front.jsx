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
                Projeto desenvolvido em React, utilizando JavaScript e Axios 
                para consumir a API TbMovies. O projeto utiliza useState e 
                useEffect, um carousel implementado com Bootstrap, rotas com 
                React Router DOM, componentização, além de outras funcionalidades.
                Esta aplicação permite ao usuário explorar uma vasta gama de 
                informações sobre filmes, proporcionando uma experiência 
                interativa e dinâmica."
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
                Desenvolvimento de uma página React para o projeto Sensor de Temperatura da 
                Faculdade IFSUL, explorando a criação de várias rotas, 
                useState, login, ContextAPI para estado global, 
                busca de usuários, React Hook Form, Yup, 
                useEffect, 
                uso de axios para realizar solicitações HTTP à API, e a  
                criação de componentes reutilizáveis para manter um código limpo e modular"
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
                Desenvolvimento de um jogo utilizando Vite, com a criação de 
                objetos, modularização, e atributos de gaming, como atirar 
                e colisões. Além disso, o projeto inclui a manipulação de 
                áudio e deploy no Netlify. Este jogo oferece uma experiência 
                envolvente, explorando diversas mecânicas de jogo e 
                proporcionando entretenimento e diversão para os usuários.
                "
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
                Desenvolvimento de um formulário em React, utilizando React 
                Hook Form e Yup para validação de campos. Este projeto 
                oferece uma experiência interativa e responsiva, 
                garantindo que os dados inseridos pelos usuários sejam 
                válidos e seguros."
                
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
                Desenvolvimento de uma calculadora funcional em React, 
                utilizando Vite. Este projeto é voltado para praticar props, 
                useState para alterar o estado dos componentes e componentização. 
                Proporciona uma experiência interativa e responsiva, permitindo 
                que os usuários realizem cálculos de forma simples e eficaz."
                
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
                Desenvolvimento de 4 mini jogos utilizando JavaScript: 
                Jogo da memória, Pegar Círculo, Piano e Pedra, Papel, 
                Tesoura. Este projeto foi orientado a protótipo, com 
                manipulação de listas, manipulação de DOM e utilização 
                do Vite para organização do projeto. "
                
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
                Desenvolvimento de um site voltado para a venda de chocolates, 
                utilizando efeito parallax, Flexbox, Media queries, 
                responsividade, menu fixo, menu interativo para dispositivos 
                móveis, SEO, acessibilidade e arquitetura BEM. 
                Permite que os usuários explorem os produtos de forma 
                eficiente e intuitiva."
                
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
                Desenvolvimento de um site de busca de imagens, com uso de 
                Flexbox, animações, efeitos em imagens através de pseudo-elements,
                select personalizado com dark theme, responsividade, boa 
                performance, acessibilidade, SEO, funções pequenas de JavaScript 
                e arquitetura BEM. "

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