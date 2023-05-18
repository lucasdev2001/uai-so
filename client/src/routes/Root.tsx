import axios from "axios";
import Avatar from "boring-avatars";
import { Link } from "react-router-dom";
function Root() {
  const userName = "Pedro Belle";

  const handleSetCookie = async () => {
    const response = await axios.get("http://localhost:3000/test", {
      withCredentials: true,
    });
    console.log(response);
  };

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
                  <Link to={"/login"}>login</Link>
                </li>
                <li>
                  <Link to={"/cadastro"}>cadastro</Link>
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
        <button onClick={handleSetCookie}>set cookie</button>
      </section>
      <section className="container"></section>
    </>
  );
}

export default Root;
