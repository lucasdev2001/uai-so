export default (props: { onSubmit: any; onChange: any }) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="datetime-local"
        name="data"
        onChange={props.onChange}
        required
      />
      <input
        type="range"
        name="qtdPessoas"
        defaultValue={1}
        min={1}
        max={5}
        onChange={props.onChange}
      />
      <div className="text-center">
        quantidade de pessoas: <span id="qtd-pessoas-output">1</span>
      </div>
      <br />
      <button>realizar reserva</button>
    </form>
  );
};
