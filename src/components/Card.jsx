import { useState, useEffect } from "react";

function Card({titulo, descricao, src, className, tecnoParagrafo, tecnologias, tituloClassName, espaco, btnEstilizacao, divBtn, linkProjeto, linkPage, tamanhoImg, descricaoClassName}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`${className} ${isVisible ? 'visible' : 'hidden'}`}>
            <img src={src} alt="imagem do projeto" className={tamanhoImg}/>
            <div className={espaco}>
                <p className={tituloClassName}>{titulo}</p>
                <p className={descricaoClassName}>{descricao}</p>
                <p className={tecnoParagrafo}>{tecnologias}</p>
                <div className={divBtn}>
                    <button className={btnEstilizacao}><a href={linkProjeto} target="_blank" rel="noreferrer">CÓDIGO</a></button>
                    <button className={btnEstilizacao}><a href={linkPage} target="_blank" rel="noreferrer">PAGE</a></button>
                </div>
            </div>
            
        </section>
    );
}

export default Card;
