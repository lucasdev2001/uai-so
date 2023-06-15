import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [cardapio, setCardapio] = useState<any>([{}]);
  const [quantidade, setQuantidade] = useState("1");
  const [prato, setPrato] = useState({});
  const [pratosEscolhidos, setPratosEscolhidos] = useState({});
  useEffect(() => {
    axios(import.meta.env.VITE_HOST + "/pratos")
      .then(res => setCardapio(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleInputNClick = (e: any) => {
    if (e.target.name === "qtd") {
      setPrato({
        ...prato,
        qtd: e.target.value,
      });
    } else {
      setPrato({
        ...prato,
        nome: e.target.id,
      });
    }
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
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#" role="button">
              Button
            </a>
          </li>
        </ul>
      </nav>
      <br />
      <main className="container">
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <a href="#" className="secondary">
            2xLagosta
          </a>
        </div>
        <br />
        <input type="search" placeholder="achar prato" />
        <hr />
        <br />

        <details open>
          <summary>pratos</summary>
          <input
            type="range"
            defaultValue={quantidade}
            min={1}
            max={5}
            name="qtd"
            onChange={handleInputNClick}
          />

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
          <input type="text" placeholder="nome do cliente" />
          <textarea placeholder="detalhes"></textarea>
        </details>
      </main>
    </>
  );
};
