import "./Campotexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, aoAlterado, valor }) => {
  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={aoDigitar}
        required={obrigatorio}
        type="text"
        placeholder={placeholder}
        value={valor}
      />
    </div>
  );
};

export default CampoTexto;
