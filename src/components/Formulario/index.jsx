import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario-container">
      <form onSubmit={aoSalvar} className="formulario">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label={"Nome"}
          placeholder={"Digite seu nome"}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label={"Cargo"}
          placeholder={"Digite o seu cargo"}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          obrigatorio={false}
          label={"Imagem"}
          placeholder={"Digite o endereço da sua imagem"}
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          label={"Time"}
          itens={times}
          obrigatorio={true}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio
          label={"Nome"}
          placeholder={"Digite o nome do time"}
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label={"Cor"}
          placeholder={"Digite a cor do time"}
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
