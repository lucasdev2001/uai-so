import { useEffect, useState } from "react";
import { ICliente } from "../../types";
import FoodCard from "../../components/FoodCard";
import Navbar from "../../components/Navbar";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://168.75.85.83:49160");
socket.on("connection", () => {
  socket.emit("updatePratos", "fetch origin");
});
export default () => {
  socket.on("updatePratos", async () => {
    setPratos(
      await axios("http://168.75.85.83:49160" + "/pratos").then(res => res.data)
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
      .get("http://168.75.85.83:49160" + "/pratos")
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

  const handlePesquisa = (e: any) => {
    const value = e.target.value;
    const filteredArray = pratos.filter((e: any) =>
      e.nome.toLowerCase().includes(value.toLowerCase())
    );
    if (value === "" || pratos.length === 0) {
      axios("http://168.75.85.83:49160" + "/pratos")
        .then(res => setPratos(res.data))
        .catch(error => console.log(error));
    }
    setPratos(filteredArray);
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
        <input
          type="search"
          placeholder="pesquisar por prato"
          onChange={handlePesquisa}
        />
      </section>

      <section className="container">
        <ListaCardapio cardapio={pratos} />
      </section>
    </>
  );
};
