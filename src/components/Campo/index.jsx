import "./Campo.css";

const Campo = ({
  type = "text",
  label,
  placeholder,
  obrigatorio,
  aoAlterado,
  valor,
}) => {
  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        onChange={aoDigitar}
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
        value={valor}
      />
    </div>
  );
};

export default Campo;
