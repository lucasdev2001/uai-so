import { useEffect, useState } from "react";
import { ICliente, IPrato } from "../../types";
import FoodCard from "../../components/FoodCard";
import Navbar from "../../components/Navbar";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/");

export default () => {
  socket.on("chat message", msg => {
    console.log(msg);
  });
  useEffect(() => {
    const clienteLocalStorage = localStorage.getItem("cliente") ?? null;
    if (clienteLocalStorage) {
      setCliente(JSON.parse(clienteLocalStorage));
    }
  }, []);
  socket.emit("chat message", "Lucas");

  const [cliente, setCliente] = useState<ICliente | null>(null);
  const [cardapio, setCardapio] = useState([1, 2, 3]);
  const [carrinho, setCarrinho] = useState([]);

  const handleEscolherPrato = (e: any) => {
    const { id, value, classList } = e.target;
    classList.toggle("outline");
  };

  const ListaCardapio = (props: { cardapio: any }) => {
    return props.cardapio.map((e: IPrato, index: "") => (
      <FoodCard onClick={handleEscolherPrato} id={index} key={index} />
    ));
  };

  return (
    <>
      <Navbar />

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
            Tradicionais
          </a>
          <a href="#" role="button" className="">
            Lanches
          </a>

          <a href="#" role="button" className="outline">
            Sobremesas
          </a>
        </div>
      </section>
      <section className="container">
        <ListaCardapio cardapio={cardapio} />
      </section>
      <dialog className="off-canvas" id="carrinho-dialog">
        <article>
          <header>
            <a
              href="#"
              style={{
                float: "right",
              }}
              onClick={() => {
                (
                  document.getElementById(
                    "carrinho-dialog"
                  ) as HTMLDialogElement
                ).close();
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
    </>
  );
};
