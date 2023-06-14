export default (props: { onInputChange: any; onFormSubmit: any }) => {
  return (
    <>
      <form onSubmit={props.onFormSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="nome"
          onChange={props.onInputChange}
          name="nome"
        />
        <textarea
          placeholder="Descrição"
          onChange={props.onInputChange}
          name="descricao"
        ></textarea>
        <input
          type="text"
          placeholder="preço"
          onChange={props.onInputChange}
          name="preco"
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
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
