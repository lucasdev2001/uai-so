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
        <div className="food-card-image">
          <img
            src={"http://168.75.85.83:49160" + "/images/" + props.foto}
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="food-card-content">
          <p style={{ marginBottom: "auto", flexGrow: 1 }}>{props.descricao}</p>
          <small>{props.preco}</small>
          <button onClick={props.onClick} id={props.id} className="">
            {props.nome}
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
