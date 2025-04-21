import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Footer from "./components/Footer";
import Titulo from "./components/Titulo";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColadoradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const [times, setTimes] = useState([
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ]);

  function deletarColaborador() {
    console.log("Deletendo Colaborador");
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.corSecundaria = cor;
        }
        return time;
      })
    );
  }

  return (
    <>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColadoradorAdicionado(colaborador)
        }
      />
      <Titulo />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
