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
  const [cardapio, setCardapio] = useState([]);

  const mock = [
    { nome: "Lagosta", descricao: "Uma lagosta muito gostosa", foto: "" },
  ];

  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <a
              href="#"
              className="notification"
              style={{ position: "relative" }}
            >
              <i className="bi bi-bell"></i>
              <span className="badge">1</span>
            </a>
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
                  <a>Minhas reservas</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      <header className="container">
        <hgroup>
          <h2>Bem vindo {cliente?.nome}</h2>
          <h3>Escolha até três pratos e agende sua reserva!</h3>
        </hgroup>
      </header>
      <br />
      <section className="container">
        <input type="search" placeholder="pesquisar por prato" />
      </section>

      <section className="container">
        <div className="filters">
          <a href="#" role="button" className="outline">
            Principal
          </a>
          <a href="#" role="button" className="outline">
            Lanche
          </a>

          <a href="#" role="button">
            Sobremesa
          </a>
        </div>
      </section>
      <section className="container">
        <div
          style={{
            display: "flex",
            minHeight: 100,
            gap: 20,
            padding: 10,
          }}
        >
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
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button style={{ marginTop: "auto" }}>Lagosta</button>
          </div>
        </div>
      </section>
      <div className="off-canvas">
        <dialog>
          <article>
            <header>
              <a
                href="#"
                style={{
                  float: "right",
                }}
              >
                <i className="bi bi-arrow-down-circle-fill" />
              </a>
              Seu carrinho
            </header>
            <div
              style={{
                display: "flex",
                minHeight: 200,
                overflow: "hidden",
                gap: "10px",
              }}
            >
              <div style={{ width: "50%" }}>
                <img
                  src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ borderRadius: "20px", padding: 3 }}
                />
              </div>
              <div style={{ width: "50%" }}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                </p>
                <p>serve duas pessoas</p>
                <p>acompanha porco</p>
                <br />
                <button>Lagosta</button>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="range" />
                  <output>4</output>
                  <a href="" style={{ float: "right" }}>
                    <i className="bi bi-trash" />
                  </a>
                </div>
              </div>
            </div>
            <br />
            <button>Agendar reserva</button>
          </article>
        </dialog>
      </div>
    </>
  );
};
