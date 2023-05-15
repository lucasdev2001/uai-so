import Avatar from "boring-avatars";
function Root() {
  const userName = "Pedro Belle";

  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <strong>Uai Sô</strong>
          </li>
        </ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                perfil
              </summary>
              <ul role="listbox">
                <li>
                  <a href="#">login</a>
                </li>
                <li>
                  <a href="#">cadastro</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <section className="container">
        <center>
          <Avatar
            size={200}
            name={userName}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </center>
      </section>
      <section className="container">
        <button>reservar mesa</button>
        <button>reservar pedido</button>
      </section>
      <section className="container"></section>
    </>
  );
}

export default Root;
