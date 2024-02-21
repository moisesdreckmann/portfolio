import '../../src/App.css'

function CardTecnologia({ text, color, className, img }) {

  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className={className} style={cardStyle}>
      {img && <img src={img} alt="" className='imgTecnologiaHome' />}
      {text}
    </div>
  );
}

export default CardTecnologia;
