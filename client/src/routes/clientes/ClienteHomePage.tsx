import { useEffect, useState } from "react";
import { ICliente } from "../../types";

export default () => {
  useEffect(() => {
    const clienteLocalStorage = localStorage.getItem("cliente") ?? null;
    if (clienteLocalStorage) {
      setCliente(JSON.parse(clienteLocalStorage));
    }
  }, []);
  const [cliente, setCliente] = useState<ICliente | null>(null);
  console.log(cliente);

  return (
    <>
      <nav className="container">
        <ul>
          <li>Bem Vindo</li>
        </ul>
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                Lucas
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
      <header className="container">
        <img src="./images/header-image.png" className="rounded-5" />
      </header>
      <br />
      <section className="container">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="pesquisar"
        />
      </section>
      <section className="container">
        <div className="text-center">
          <div className="row">
            <div className="col rounded-pill p-2 m-1">massas</div>
            <div className="col rounded-pill p-2 m-1 shadow-sm">carnes</div>
            <div className="col rounded-pill p-2 m-1 shadow-sm">risoto</div>
          </div>
        </div>
      </section>
    </>
  );
};
