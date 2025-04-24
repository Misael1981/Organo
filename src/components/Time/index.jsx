import "./Time.css";
import Colaborador from "../Colaboradores";
import hexToRgba from "hex-to-rgba";

const Time = ({
  nome,
  cor,
  colaboradores,
  aoDeletar,
  mudarCor,
  id,
  aoFavoritar,
}) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundColor: hexToRgba(cor, "0.6"),
      }}
    >
      <input
        type="color"
        className="input-cor"
        onChange={(evento) => mudarCor(evento.target.value, id)}
        value={cor}
      />
      <h3 style={{ borderColor: cor, color: cor }}>{nome}</h3>
      <div className="colaborades">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={cor}
              aoDeletar={aoDeletar}
              colaborador={colaborador}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
