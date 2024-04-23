import { useState, useEffect } from "react";

function Card({descricao, src, className, tecnoParagrafo, tecnologias, espaco, btnEstilizacao, divBtn, linkProjeto, linkPage, tamanhoImg, descricaoClassName}) {
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
                <p className={tecnoParagrafo}>{tecnologias}</p>
                <p className={descricaoClassName}>{descricao}</p>
                
                <div className={divBtn}>
                    <button className={btnEstilizacao}><a href={linkProjeto} target="_blank" rel="noreferrer">CÓDIGO</a></button>
                    <button className={btnEstilizacao}><a href={linkPage} target="_blank" rel="noreferrer">PAGE</a></button>
                </div>
            </div>
            
        </section>
    );
}

export default Card;
