import { useEffect, useState } from "react";
import { ICliente } from "../../types";
import FoodCard from "../../components/FoodCard";
import Navbar from "../../components/Navbar";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io(import.meta.env.VITE_HOST);
socket.on("connection", () => {
  socket.emit("updatePratos", "fetch origin");
});
export default () => {
  socket.on("updatePratos", async () => {
    setPratos(
      await axios(import.meta.env.VITE_HOST + "/pratos").then(res => res.data)
    );
  });

  const [usuario, setUsuario] = useState<ICliente | null>(null);
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const usuarioLocalStorage = localStorage.getItem("usuario") ?? null;
    if (usuarioLocalStorage) {
      setUsuario(JSON.parse(usuarioLocalStorage));
    }
    axios
      .get(import.meta.env.VITE_HOST + "/pratos")
      .then(response => setPratos(response.data));
  }, []);

  const handleEscolherPrato = async (e: any) => {
    const { classList } = e.target;
    classList.toggle("outline");
  };

  const ListaCardapio = (props: { cardapio: any }) => {
    return props.cardapio.map((e: any, index: "") => (
      <>
        <FoodCard
          onClick={handleEscolherPrato}
          id={index}
          key={index}
          nome={e.nome}
          foto={e.foto}
          descricao={e.descricao}
          preco={e.preco}
        />
      </>
    ));
  };

  return (
    <>
      <Navbar />

      <header className="container">
        <hgroup>
          <h2>Bem vindo {usuario?.nome}</h2>
          <h3>Dê uma olhada no cardápio de hoje!</h3>
        </hgroup>
      </header>
      <br />
      <section className="container">
        <input type="search" placeholder="pesquisar por prato" />
      </section>

      <section className="container">
        <figure>
          <div className="filters">
            <a href="#" role="button" className="outline">
              Tradicionais
            </a>
            <a href="#" role="button" className="outline">
              Lanches
            </a>

            <a href="#" role="button" className="outline">
              Sobremesas
            </a>
          </div>
        </figure>
      </section>
      <section className="container">
        <ListaCardapio cardapio={pratos} />
      </section>
    </>
  );
};
