import "./Time.css";
import Colaborador from "../Colaboradores";

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
  mudarCor,
}) => {
  return colaboradores.length > 0 ? (
    <section
      style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundColor: corSecundaria,
      }}
      className="time"
    >
      <input
        onChange={(evento) => mudarCor(evento.target.value, nome)}
        value={corSecundaria}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: corPrimaria, color: corPrimaria }}>{nome}</h3>
      <div className="colaborades">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={corPrimaria}
              aoDeletar={aoDeletar}
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
