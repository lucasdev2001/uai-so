import Avatar from "boring-avatars";
import { useEffect, useState } from "react";
import { ICliente } from "../../types";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigator = useNavigate();
  useEffect(() => {
    const clienteLocalStorage = localStorage.getItem("cliente");
    if (clienteLocalStorage) {
      setCliente(JSON.parse(clienteLocalStorage));
      console.log(cliente);
    } else {
      navigator("/clientes/login");
    }
  }, []);
  const [cliente, setCliente] = useState<ICliente>({
    _id: "",
    nome: "",
    email: "",
  });
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <strong>Uai Sô 🤠</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Cardápio</a>
          </li>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                Menu
              </summary>
              <ul role="listbox">
                <li>
                  <a>Minhas reservas</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <section className="container">
        <center>
          <hgroup>
            <h2>{cliente.nome}</h2>
            <h3>Bem vindo</h3>
          </hgroup>
          <Avatar
            size={220}
            name={`${cliente._id}`}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </center>
        <br />
        <button>fazer reserva</button>
      </section>
    </>
  );
};
