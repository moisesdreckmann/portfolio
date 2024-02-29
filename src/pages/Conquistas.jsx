import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import santander from '../assets/imagesPage/santander.png'
import ifood from '../assets/imagesPage/ifood.jpg'
import formacao1 from '../assets/imagesPage/formacao1.png'
import formacao2 from '../assets/imagesPage/formacao2.png'
import formacao3 from '../assets/imagesPage/formacao3.png'

function Conquistas() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />
                <div className='containerConquista'>
                    <h2>FORMAÇÃO EM REACT NATIVE</h2>
                    <img src={formacao3} alt="imagem da conquista" className='imgconquista'/>
                </div>

                <div className='containerConquista'>
                    <h2>FORMAÇÃO EM TYPESCRIPT</h2>
                    <img src={formacao2} alt="imagem da conquista" className='imgconquista'/>
                </div>

                <div className='containerConquista'>
                    <h2>FORMAÇÃO EM REACT</h2>

                    <img src={formacao1} alt="imagem da conquista" className='imgconquista'/>
                </div>

                <div className='containerConquista'>
                    <h2>2° colocado bootcamp Ifood Tech Desenvolvimento de Jogos com Javascript</h2>
                    <p>16921 participantes | Bootcamp foi de 25/09/23 até 19/02/24</p>
                    <img src={ifood} alt="imagem da conquista" className='imgconquista'/>
                </div>
                <div className='containerConquista'>
                    <h2>3º colocado bootcamp santander JAVA</h2>
                    <p>8254 participantes | Bootcamp foi de 16/08/23 até 22/10/23</p>
                    <img src={santander} alt="imagem da conquista" className='imgconquista'/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Conquistas