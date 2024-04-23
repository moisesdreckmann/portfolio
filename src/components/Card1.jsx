import  { useState, useEffect } from "react";
import Modal from "./Modal";

function Card1({ titulo, descricao, src, className, tecnoParagrafo, tecnologias,tituloClassName, espaco, btnEstilizacao, divBtn, linkProjeto, linkPage, tamanhoImg, descricaoClassName, videos }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isWebPage, setIsWebPage] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setIsWebPage(linkPage.startsWith("http"));
    }, [linkPage]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={`${className} ${isVisible ? 'visible' : 'hidden'}`}>
            <img src={src} alt="imagem do projeto" className={tamanhoImg} />
            <div className={espaco}>
                <p className={tituloClassName}>{titulo}</p>
                <p className={descricaoClassName}>{descricao}</p>
                <p className={tecnoParagrafo}>{tecnologias}</p>
                <div className={divBtn}>
                    <button className={btnEstilizacao}><a href={linkProjeto} target="_blank" rel="noreferrer">CÓDIGO</a></button>
                    <button className={btnEstilizacao} onClick={openModal}>{isWebPage ? 'PAGE' : 'VÍDEO'}</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <video controls className="modal-video">
                    <source src={videos} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </Modal>
        </section>
    );
}

export default Card1;
