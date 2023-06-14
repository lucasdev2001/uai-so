export default (props: { handleInputChange: any; handleFormSubmit: any }) => {
  return (
    <>
      <form method="POST" onSubmit={props.handleFormSubmit}>
        <input
          type="text"
          placeholder="nome"
          onChange={props.handleInputChange}
        />
        <textarea
          placeholder="Descrição"
          onChange={props.handleInputChange}
        ></textarea>
        <input
          type="text"
          placeholder="preço"
          onChange={props.handleInputChange}
        />

        <label htmlFor="">
          foto
          <input
            type="file"
            placeholder="foto"
            multiple={false}
            accept="image/*"
            onChange={props.handleInputChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
