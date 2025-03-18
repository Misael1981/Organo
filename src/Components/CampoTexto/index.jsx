import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input required={obrigatorio} type="text" placeholder={placeholder} />
    </div>
  );
};

export default CampoTexto;
