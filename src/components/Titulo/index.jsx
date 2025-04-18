import "./Titulo.css";
import Botao from "/images/Botao.png";

const Titulo = () => {
  return (
    <div className="titulo_containerTime">
      <h2>Minha Organização</h2>
      <img src={Botao} alt="Botão" />
    </div>
  );
};

export default Titulo;
