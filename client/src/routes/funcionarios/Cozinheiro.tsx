import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import FuncionariosNavbar from "../../components/FuncionariosNavbar";

export default () => {
  const socket = io(import.meta.env.VITE_HOST);
  const [pedidos, setPedidos] = useState<any>([]);

  socket.on("atualizarPedidos", () => {
    axios
      .get(import.meta.env.VITE_HOST + "/pedidos")
      .then(res => setPedidos(res.data));
  });

  useEffect(() => {
    axios.get(import.meta.env.VITE_HOST + "/pedidos").then(res => {
      setPedidos(res.data);
      console.log(res.data);
    });
  }, []);

  const handlePesquisa = (e: any) => {
    const value = e.target.value;
    console.log(value);
    console.log(pedidos);

    const filteredArray = pedidos.filter((e: any) =>
      e.nomeCliente.toLowerCase().includes(value.toLowerCase())
    );
    if (value === "" || pedidos.length === 0) {
      axios(import.meta.env.VITE_HOST + "/pedidos")
        .then(res => setPedidos(res.data))
        .catch(error => console.log(error));
    }
    setPedidos(filteredArray);
  };

  const PedidoComponent = (props: {
    senha: string;
    status: string;
    descricao: string;
    cliente: string;
    pedido_id: string;
    pratos: [];
  }) => {
    return (
      <>
        <article
          className={
            props.status === "finalizado" || props.status === "descartado"
              ? "disableDiv"
              : ""
          }
        >
          <header>
            pedido <a href="#">{props.senha}</a>
            <a href="#" style={{ float: "right" }}>
              {props.status}
            </a>
            <br />
            cliente <a href="#">{props.cliente}</a>
          </header>
          {props.descricao}
          <ul>
            {props.pratos &&
              props.pratos.map((e: any) => (
                <li>
                  {e.qtd}x {e.nome}
                </li>
              ))}
          </ul>
          <footer style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a
              href="#"
              role="button"
              onClick={() => {
                socket.emit("mudarStatusPedido", {
                  status: "em preparo",
                  _id: props.pedido_id,
                });
              }}
            >
              Em preparo
            </a>
            <a
              href="#"
              role="button"
              onClick={() => {
                socket.emit("mudarStatusPedido", {
                  status: "finalizado",
                  _id: props.pedido_id,
                });
              }}
            >
              Finalizado
            </a>
            <a
              href="#"
              role="button"
              onClick={() => {
                socket.emit("mudarStatusPedido", {
                  status: "descartado",
                  _id: props.pedido_id,
                });
              }}
            >
              descartar
            </a>
          </footer>
        </article>
      </>
    );
  };

  return (
    <>
      <FuncionariosNavbar />
      <br />
      <main className="container">
        <input
          type="search"
          placeholder="pesquisar por nome/cliente"
          onChange={handlePesquisa}
        />

        {pedidos.map((e: any) => (
          <PedidoComponent
            cliente={e.nomeCliente}
            descricao={e.descricao}
            pedido_id={e._id}
            senha={e.senhaPedido}
            pratos={e.pratos}
            status={e.status}
          />
        ))}
      </main>
    </>
  );
};
