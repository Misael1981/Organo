import { IoIosCloseCircle } from "react-icons/io";
import "./Colaboradores.css";

const Colaboradores = ({ nome, cargo, imagem, corDeFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
      <IoIosCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaboradores;
