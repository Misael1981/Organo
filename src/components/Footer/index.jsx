import "./Footer.css";
import Facebook from "/images/fb.png";
import Twiter from "/images/tw.png";
import Instagram from "/images/ig.png";
import Logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logos">
        <img src={Facebook} alt="Logo do Facebook" />
        <img src={Twiter} alt="Logo do Twiter" />
        <img src={Instagram} alt="Logo do Instagram" />
      </div>
      <div className="logo-principal">
        <img src={Logo} alt="Logo da Organo" />
      </div>
      <div className="descricao">
        <p>Desenvolvido por Misael Borges,</p>
        <p>
          na formação React: Desenvolvendo com JavaScript da{" "}
          <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript/task/107555">
            Alura
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
