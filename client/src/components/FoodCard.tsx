export default (props: { onClick: any; id: "" }) => {
  return (
    <>
      <div className="food-card">
        <div style={{ width: "50%" }}>
          <img
            src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div
          className="food-card-content"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button onClick={props.onClick} id={props.id} className="outline">
            Lagosta
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
