import axios from "axios";
import Dialog from "../../../components/Dialog";
import AddPrato from "../components/AddPrato";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import TabelaCardapio from "../components/tabelaCardapio";
const socket = io("http://localhost:3001/");

export default () => {
  socket.on("updatePratos", () => {
    axios
      .get("http://localhost:3001/pratos")
      .then(response => setCardapio(response.data));
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/pratos")
      .then(response => setCardapio(response.data));
  }, []);

  const [prato, setPrato] = useState<any>(null);
  const [cardapio, setCardapio] = useState<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .postForm("http://localhost:3001/pratos", prato)
      .then(() => {})
      .catch(error => console.log(error));
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "foto") {
      setPrato({
        ...prato,
        foto: e.target.files[0],
      });
    } else {
      setPrato({
        ...prato,
        [name]: value,
      });
    }
  };

  return (
    <>
      <nav className="container">
        <ul></ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                perfil
              </summary>
              <ul role="listbox">
                <li>
                  <a href="#">Adicionar Item</a>
                </li>
                <li>
                  <a>Remover Item</a>
                </li>
                <li>
                  <a>Something else here</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <main className="container">
        <aside>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    (
                      document.getElementById("add-prato") as HTMLDialogElement
                    ).show()
                  }
                >
                  Adicionar um novo prato
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <Dialog title={prato && prato.nome} dialogId={"add-prato"}>
          <AddPrato
            onInputChange={handleInputChange}
            onFormSubmit={handleSubmit}
          />
        </Dialog>
      </main>
    </>
  );
};
