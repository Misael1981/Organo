import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, itens, obrigatorio, aoAlterado, valor }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        value={valor}
        required={obrigatorio}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
