import "./Time.css";
import Colaborador from "../Colaboradores";

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
}) => {
  return colaboradores.length > 0 ? (
    <section style={{ backgroundColor: corSecundaria }} className="time">
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
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
