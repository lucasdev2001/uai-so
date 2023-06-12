export default (props: {
  onClick: any;
  id: "";
  foto: "";
  nome: "";
  preco: "";
  descricao: "";
}) => {
  return (
    <>
      <div className="food-card">
        <div style={{ width: "50%" }}>
          <img src={props.foto} style={{ borderRadius: "5px" }} />
        </div>
        <div
          className="food-card-content"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>{props.descricao}</p>
          <strong>preços: {props.preco}</strong>
          <button onClick={props.onClick} id={props.id} className="outline">
            {props.nome}
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
