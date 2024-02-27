import Card1 from "../components/Card1.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import java from '../assets/imagesPage/java.jpg'
import c from '../assets/imagesPage/c.png'
import americanas from '../assets/imagesPage/americanas.png'
import java2 from '../assets/imagesPage/JAVA2.png'
import reactnative011 from '../assets/imagesPage/reactNative01.png'
import reactnative022 from '../assets/imagesPage/reactNative02.png'
import reactnative044 from './../assets/imagesPage/reactNative04.png'

import videoJava2 from './../assets/imagesPage/videoJava2.mp4'
import cpp from './../assets/imagesPage/c.mp4'
import americanas2 from './../assets/imagesPage/americanas2.mp4'
import videoJava1 from './../assets/imagesPage/videoJava2.mp4'
import reactnative01 from './../assets/imagesPage/reactNative01.mp4'
import reactnative02 from './../assets/imagesPage/reactNative02.mp4'
import reactnative04 from './../assets/imagesPage/reactNative04.mp4'

function Back() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />

                <Card1
                src={reactnative044}
                titulo="React Native Consumindo Objetos"
                descricao="O projeto consiste na 'troca de tela' dentre as opções de
                carros disponiveis na loja, onde os objetos javascript
                trocam dinamicamente na tela. Tecnologias: React Native Javascript."
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative04"
                linkPage="#"
                videos={reactnative04}
                >
                </Card1>

                <Card1
                src={reactnative022}
                titulo="Form em React Native CLI"
                descricao="Criado um projeto de formulário, onde o usuário coloca as informações a respeito, e são capturadas para poder trabalhar com elas. Usado também para useState dentre inputs e botões. Tecnologias: React Native."
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative02/tree/main"
                linkPage="#"
                videos={reactnative02}
                >
                </Card1>

                <Card1
                src={reactnative011}
                titulo="Password Generator"
                descricao="Aplicativo voltado para celular que gera senhas aleatórias e copia elas com um botão, com componentização em react native, e useStates. Tecnologias: React Native, NodeJS."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/reactNative01"
                linkPage="#"
                videos={reactnative01}
                >
                </Card1>

                <Card1
                src={americanas}
                titulo="RÉPLICA SITE DA AMERICANAS EM PHP"
                descricao="Código Reutilizavel com funções POO em PHP. 
                Pode ser acessada uma página esclusiva para Notebooks no Menu. 
                Produtos recomendados, com PHP e limitedrows incluso. 
                Alteração de senha. Envio de email apra confirmação e entrada no site. Senha criptografada no Banco sql. E muito mais disponivel em projeto no github. Tecnologias: PHP|PDO HTML CSS JWT Axios Google"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/Americanas"
                linkPage="#"
                videos={americanas2}
                >
                </Card1>

                <Card1
                src={java2}
                titulo="BIBLIOTECA EM JAVA"
                descricao="É um sistema de software
                que automatiza as tarefas de gerenciamento de uma biblioteca. Ele inclui recursos para o cadastro
                de usuários, empréstimo de exemplares, devolução de exemplares e listagens (pesquisa) de alunos,
                empréstimos e exemplares. A tecnologia da implementação é java com spring boot como framework. Tecnologias: Java SpringBoot Maven"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/javaAula2"
                linkPage="#"
                videos={videoJava2}
                >
                </Card1>

                <Card1
                src={java}
                titulo="JAVA"
                descricao="Aulas de JAVA proporcionadas pela faculdade IFSUL(Instituto Federal Sul-Rio-Grandense). Herança, Polimorfismo, Associação entre classes, Exceções, Collections, Maven, Spring boot, Api, Crud, Api Rest. Tecnologias: Java SpringBoot"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/java"
                linkPage="#"
                videos={videoJava1}
                >
                </Card1>

                <Card1
                src={c}
                titulo="PROJETO EM ESTRUTURA DE DADOS"
                descricao="Simulação de um caixa de loja. Foi utilizado: criação de structs, duas listas duplamente encadeadas, e salvamento de dados em bloco de notas, agindo como um banco de dados. Além de outras funcionadades extras. Tecnologias: C Estrutura de Dados."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/projectCpp"
                linkPage="#"
                videos={cpp}
                >
                </Card1>
            </main>
            <Footer/>
        </>
    )
}

export default Back