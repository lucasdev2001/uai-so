export default (props: {
  onInputChange: any;
  onFormSubmit: any;
  fill?: {
    nome: string;
    descricao: string;
    categoria: string;
    preco: string;
    foto: string;
  };
}) => {
  return (
    <>
      <form onSubmit={props.onFormSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="nome"
          onChange={props.onInputChange}
          name="nome"
          defaultValue={props.fill?.nome ?? ""}
          required
        />
        <select onChange={props.onInputChange} name="categoria">
          <option disabled={true} selected={true}>
            Categoria
          </option>
          <option value={"tradicional"}>Tradicional</option>
          <option value={"lanche"}>Lanche</option>
          <option value={"lanche"}>Sobremesa</option>
        </select>
        <textarea
          placeholder="Descrição"
          onChange={props.onInputChange}
          name="descricao"
          defaultValue={props.fill?.descricao ?? ""}
          required
        ></textarea>
        <input
          type="text"
          placeholder="preço"
          onChange={props.onInputChange}
          name="preco"
          defaultValue={props.fill?.preco ?? ""}
          required
        />

        <label htmlFor="">
          foto
          <input
            name="foto"
            type="file"
            placeholder="foto"
            multiple={false}
            accept="image/*"
            onChange={props.onInputChange}
          />
        </label>
        <button type="submit">{props.fill ? "Editar" : "Cadastrar"}</button>
      </form>
    </>
  );
};
