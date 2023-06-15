import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { io } from "socket.io-client";
import FuncionariosNavbar from "../../components/FuncionariosNavbar";
const socket = io("http://168.75.85.83:49160");

export default () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cardapio, setCardapio] = useState<any>([]);
  const [prato, setPrato] = useState<any>({
    qtd: "1",
  });
  const [pratosEscolhidos, setPratosEscolhidos] = useState<any>([]);
  useEffect(() => {
    axios("http://168.75.85.83:49160" + "/pratos")
      .then(res => setCardapio(res.data))
      .catch(error => console.log(error));
  }, []);

  socket.on("atualizarPedidos", () => {
    Swal.fire("The Internet?", "That thing is still around?", "question");
  });
  const handleInputNClick = (e: any) => {
    if (e.target.name === "qtd") {
      setPrato({
        ...prato,
        qtd: e.target.value,
      });
    } else {
      prato.nome = e.target.id;

      prato.tmpId = Math.floor(Math.random() * 16777215).toString(16);

      setPrato({
        ...prato,
      });
      setPratosEscolhidos((pratosEscolhidos: any) => [
        ...pratosEscolhidos,
        prato,
      ]);
    }
  };

  const handlePesquisa = (e: any) => {
    const value = e.target.value;
    console.log(e.target.value);
    console.log(cardapio);
    const filteredArray = cardapio.filter((e: any) =>
      e.nome.toLowerCase().includes(value)
    );
    if (value === "" || cardapio.length === 0) {
      axios("http://168.75.85.83:49160" + "/pratos")
        .then(res => setCardapio(res.data))
        .catch(error => console.log(error));
    }
    setCardapio(filteredArray);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://168.75.85.83:49160" + "/pedidos", {
        senhaPedido: Math.floor(Math.random() * 16777215).toString(16),
        pratos: pratosEscolhidos,
        nomeCliente: nome,
        descricao: descricao,
      })
      .then(() => {
        Swal.fire({
          title: "Sucesso!",
          text: "O Pedido foi enviado para a cozinha!",
          icon: "success",
          confirmButtonColor: "#e53935",
        });
        e.target.reset();
        setPratosEscolhidos([]);
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: "Erro",
          text: "Houve um erro" + `${error}`,
          icon: "error",
          confirmButtonColor: "#e53935",
        });
      });
  };
  return (
    <>
      <FuncionariosNavbar />
      <main className="container">
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {pratosEscolhidos.map((e: any) => (
              <>
                <a
                  href="#"
                  className="secondary"
                  id={e.tmpId}
                  onClick={(prato: any) =>
                    setPratosEscolhidos(
                      pratosEscolhidos.filter(
                        (e: any) => e.tmpId !== prato.target.id
                      )
                    )
                  }
                >
                  {e.qtd}x{e.nome}
                </a>
              </>
            ))}
          </div>
          <br />
          <input
            type="search"
            placeholder="achar prato"
            onChange={handlePesquisa}
          />
          <hr />
          <br />

          <details open>
            <summary>pratos</summary>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="range"
                defaultValue={1}
                min={1}
                max={5}
                name="qtd"
                onChange={handleInputNClick}
                required
              />
              <span>{prato.qtd}</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {cardapio.map((e: any) => (
                <a
                  href="#"
                  className="secondary"
                  key={e._id}
                  onClick={handleInputNClick}
                  id={e.nome}
                >
                  {e.nome}
                </a>
              ))}
            </div>
          </details>
          <br />
          <details open>
            <summary>Detalhes do pedido</summary>

            <input
              type="text"
              placeholder="nome do cliente"
              onChange={e => setNome(e.target.value)}
              required
            />
            <textarea
              placeholder="detalhes"
              onChange={e => setDescricao(e.target.value)}
              required
            ></textarea>
            <button>enviar pedido</button>
          </details>
        </form>
      </main>
    </>
  );
};
