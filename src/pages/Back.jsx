import Card1 from "../components/Card1.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import java from '../assets/imagesPage/java.jpg'
import c from '../assets/imagesPage/c.png'
import americanas from '../assets/imagesPage/americanas.png'
import java2 from '../assets/imagesPage/JAVA2.png'
import reactnative011 from '../assets/imagesPage/reactNative01.png'
import reactnative022 from '../assets/imagesPage/reactNative02.png'
import reactnative033 from './../assets/imagesPage/reactNative03.png'
import reactnative044 from './../assets/imagesPage/reactNative04.png'
import nextProjeto from './../assets/imagesPage/nextProjeto.png'

import videoJava2 from './../assets/imagesPage/videoJava2.mp4'
import cpp from './../assets/imagesPage/c.mp4'
import americanas2 from './../assets/imagesPage/americanas2.mp4'
import videoJava1 from './../assets/imagesPage/videoJava2.mp4'
import reactnative01 from './../assets/imagesPage/reactNative01.mp4'
import reactnative02 from './../assets/imagesPage/reactNative02.mp4'
import reactnative03 from './../assets/imagesPage/reactNative03.mp4'
import reactnative04 from './../assets/imagesPage/reactNative04.mp4'
import nextVideo from './../assets/imagesPage/nextVideo.mp4'

function Back() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />

                <Card1
                src={nextProjeto}
                descricao="
                Descrição: 
                Um projeto front-end desenvolvido em Next.js para uma empresa, 
                incorporando diversas tecnologias e práticas avançadas. Com SEO Otimizado
                para melhorar nas paginas de buscas, uma renderização hibrida, com Server-Side Rendering,
                useStates para realização de modais entre outros, e uma estilização moderna com CSS externo para
                os componentes."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="#"
                linkPage="#"
                videos={nextVideo}
                tecnologias= "NEXTJS"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={reactnative033}
                descricao="
                Descrição: 
                Este projeto em React Native CLI demonstra a utilização completa 
                de navegação, incluindo o uso de button tabs e drawer navigation.
                Além disso, foi utilizado ScrollView para proporcionar uma
                experiência de rolagem suave. O aplicativo permite a navegação 
                dinâmica entre telas, proporcionando uma experiência interativa 
                e responsiva para o usuário."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative03"
                linkPage="#"
                videos={reactnative03}
                tecnologias= "REACT NATIVE"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={reactnative044}
                descricao="
                Descrição: 
                Este projeto em React Native CLI consiste na troca dinâmica de telas 
                entre as opções de carros disponíveis na loja, onde os objetos JavaScript 
                são consumidos e trocam dinamicamente na tela. O aplicativo oferece uma 
                experiência interativa ao permitir que o usuário explore diferentes opções 
                de carros."
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative04"
                linkPage="#"
                videos={reactnative04}
                tecnologias= "REACT NATIVE - JAVASCRIPT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={reactnative022}
                descricao="
                Descrição: 
                Este é um projeto de formulário desenvolvido utilizando React 
                Native CLI, no qual os usuários podem inserir informações e as
                mesmas são capturadas para posterior manipulação. 
                O projeto faz uso do useState para gerenciar os inputs e botões, 
                oferecendo uma experiência interativa e responsiva."
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative02/tree/main"
                linkPage="#"
                videos={reactnative02}
                tecnologias= "REACT NATIVE"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={reactnative011}
                descricao="
                Descrição: 
                Password Generator. 
                Este é um gerador de senhas, um aplicativo voltado para celular, 
                desenvolvido utilizando React Native. No projeto, foram aplicadas 
                a componentização e o uso de useState para gerar senhas aleatórias 
                e copiá-las com um único clique. O aplicativo oferece uma solução 
                simples e eficaz para a geração de senhas seguras."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative01"
                linkPage="#"
                videos={reactnative01}
                tecnologias= "REACT NATIVE - NODEJS"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={americanas}
                descricao="
                Descrição: 
                RÉPLICA SITE DA AMERICANAS EM PHP. 
                Código Reutilizavel com funções POO em PHP. 
                Pode ser acessada uma página exclusiva para Notebooks no Menu. 
                Produtos recomendados, com PHP e limitedrows incluso. 
                Alteração de senha. Envio de email para confirmação e entrada no site. 
                Senha criptografada no Banco sql. E muito mais disponivel em projeto no 
                github."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/Americanas"
                linkPage="#"
                videos={americanas2}
                tecnologias= "PHP - PDO - HTML - CSS - JWT - AXIOS - GOOGLEAPI"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={java2}
                descricao="
                Descrição: 
                É um sistema de software
                que automatiza as tarefas de gerenciamento de uma biblioteca. Ele inclui recursos para o cadastro
                de usuários, empréstimo de exemplares, devolução de exemplares e listagens (pesquisa) de alunos,
                empréstimos e exemplares. A tecnologia da implementação é java com spring boot como framework."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="#"
                linkPage="#"
                videos={videoJava2}
                tecnologias= "JAVA - SPRINGBOOT - MAVEN"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={java}
                descricao="
                Descrição: 
                Aulas de JAVA proporcionadas pela faculdade IFSUL(Instituto Federal 
                    Sul-Rio-Grandense). Herança, Polimorfismo, Associação entre classes, 
                    Exceções, Collections, Maven, Spring boot, Api, Crud, Api Rest."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/java"
                linkPage="#"
                videos={videoJava1}
                tecnologias= "JAVA - SPRINGBOOT"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>

                <Card1
                src={c}
                descricao="
                Descrição: 
                Este é um simulador de caixa de loja, desenvolvido utilizando a 
                linguagem de programação C. No projeto, foram empregadas a criação
                de structs, duas listas duplamente encadeadas e o armazenamento 
                de dados em um arquivo de texto, funcionando como um banco de 
                dados simplificado. "
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/projectCpp"
                linkPage="#"
                videos={cpp}
                tecnologias= "C - C++ - ESTRUTURA DE DADOS"
                tecnoParagrafo="tecnoParagrafo"
                >
                </Card1>
            </main>
            <Footer/>
        </>
    )
}

export default Back